import {
  AddPersonDTO,
  EditPersonDTO,
  FetchPersonDTO,
  RemovePersonDTO,
} from "@/core/person/person.dtos";
import { Person } from "@/core/person/person.entity";
import { IPersonRepository } from "@/core/person/person.repository";

export class PersonRepositoryIndexedDB implements IPersonRepository {
  private dbName = "peopledex";
  private storeName = "persons";
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
          db.createObjectStore(this.storeName, { keyPath: "id" });
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

  async findById(data: FetchPersonDTO): Promise<Person | null> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readonly");
      const request = store.get(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async list(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readonly");
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async create(data: AddPersonDTO): Promise<Person["id"] | null> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const person: Person = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const request = store.add(person);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(person.id);
    });
  }

  async update(data: EditPersonDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const request = store.get(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const person = request.result;
        if (!person) {
          reject(new Error("Person not found"));
          return;
        }

        const updatedPerson = {
          ...person,
          ...data,
          updatedAt: new Date(),
        };

        const updateRequest = store.put(updatedPerson);
        updateRequest.onerror = () => reject(updateRequest.error);
        updateRequest.onsuccess = () => resolve();
      };
    });
  }

  async delete(data: RemovePersonDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      const store = this.getStore("readwrite");
      const request = store.delete(data.id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}
