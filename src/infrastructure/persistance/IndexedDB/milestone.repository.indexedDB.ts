import { Milestone } from "@/core/milestone/milestone.entity";
import {
  AddMilestoneDTO,
  FetchMilestoneHistoryDTO,
  RemoveMilestoneDTO,
  RemoveMilestoneHistoryDTO,
} from "@/core/milestone/milestone.dtos";
import { IMilestoneRepository } from "@/core/milestone/milestone.repository";

export class MilestoneRepositoryIndexedDB implements IMilestoneRepository {
  private dbName = "peopledex";
  private storeName = "milestones";
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

  async findById(data: Milestone["id"]): Promise<Milestone | null> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readonly");
      const request = store.get(data);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async list(data: FetchMilestoneHistoryDTO): Promise<Milestone[]> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readonly");
      const index = store.index("personId");
      const request = index.getAll(data.personId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async create(data: AddMilestoneDTO): Promise<Milestone["id"] | null> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const milestone: Milestone = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };

      const request = store.add(milestone);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(milestone.id);
    });
  }

  async update(data: Milestone): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const request = store.get(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const milestone = request.result;
        if (!milestone) {
          reject(new Error("Milestone not found"));
          return;
        }

        const updatedMilestone = {
          ...milestone,
          ...data,
        };

        const updateRequest = store.put(updatedMilestone);
        updateRequest.onerror = () => reject(updateRequest.error);
        updateRequest.onsuccess = () => resolve();
      };
    });
  }

  async delete(data: RemoveMilestoneDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const request = store.delete(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async deleteAll(data: RemoveMilestoneHistoryDTO): Promise<void> {
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
