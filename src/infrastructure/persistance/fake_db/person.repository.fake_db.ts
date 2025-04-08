import {
  AddPersonDTO,
  EditPersonDTO,
  FetchPersonDTO,
  RemovePersonDTO,
} from "@/core/person/person.dtos";
import { Person } from "@/core/person/person.entity";
import { IPersonRepository } from "@/core/person/person.repository";
import { persons } from "./db/persons";

export class PersonRepositoryFakeDB implements IPersonRepository {
  async findById(data: FetchPersonDTO): Promise<Person | null> {
    return persons.find((person) => person.id === data.id) || null;
  }

  async list(): Promise<Person[]> {
    return [...persons];
  }

  async create(data: AddPersonDTO): Promise<Person["id"] | null> {
    const person: Person = {
      ...data,
      id: crypto.randomUUID(),
      channels: [],
      milestones: [],
    };
    persons.push(person);
    return person.id;
  }

  async update(data: EditPersonDTO): Promise<void> {
    const index = persons.findIndex((person) => person.id === data.id);
    if (index === -1) {
      throw new Error("Person not found");
    }
    persons[index] = {
      ...persons[index],
      ...data,
    };
  }

  async delete(data: RemovePersonDTO): Promise<void> {
    const index = persons.findIndex((person) => person.id === data.id);
    if (index === -1) {
      throw new Error("Person not found");
    }
    persons.splice(index, 1);
  }
}
