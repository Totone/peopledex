import { Channel } from "@/core/channel/channel.entity";
import {
  AddChannelDTO,
  ListChannelsDTO,
  RemoveAllChannelsDTO,
  RemoveChannelDTO,
} from "@/core/channel/channel.dtos";
import { IChannelRepository } from "@/core/channel/channel.repository";

export class ChannelRepositoryIndexedDB implements IChannelRepository {
  private dbName = "peopledex";
  private storeName = "channels";
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDB();
  }

  private initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: "id" });
          store.createIndex("personId", "personId", { unique: false });
        }
      };
    });
  }

  private getStore(mode: IDBTransactionMode): IDBObjectStore {
    if (!this.db) {
      throw new Error("Database not initialized");
    }
    const transaction = this.db.transaction(this.storeName, mode);
    return transaction.objectStore(this.storeName);
  }

  async getById(data: Channel["id"]): Promise<Channel | null> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readonly");
      const request = store.get(data);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getAll(data: ListChannelsDTO): Promise<Channel[]> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readonly");
      const index = store.index("personId");
      const request = index.getAll(data.personId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async create(data: AddChannelDTO): Promise<Channel["id"]> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const channel: Channel = {
        ...data,
        id: crypto.randomUUID(),
      };

      const request = store.add(channel);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(channel.id);
    });
  }

  async update(data: Channel): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const request = store.get(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const channel = request.result;
        if (!channel) {
          reject(new Error("Channel not found"));
          return;
        }

        const updatedChannel = {
          ...channel,
          ...data,
          updatedAt: new Date(),
        };

        const updateRequest = store.put(updatedChannel);
        updateRequest.onerror = () => reject(updateRequest.error);
        updateRequest.onsuccess = () => resolve();
      };
    });
  }

  async delete(data: RemoveChannelDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const request = store.delete(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async deleteAll(data: RemoveAllChannelsDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const index = store.index("personId");
      const request = index.getAllKeys(data.personId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const keys = request.result;
        const deletePromises = keys.map((key) => {
          return new Promise<void>((resolveDelete, rejectDelete) => {
            const deleteRequest = store.delete(key);
            deleteRequest.onerror = () => rejectDelete(deleteRequest.error);
            deleteRequest.onsuccess = () => resolveDelete();
          });
        });

        Promise.all(deletePromises)
          .then(() => resolve())
          .catch((error) => reject(error));
      };
    });
  }
}
