import { AddPersonDTO, EditPersonDTO, FetchPersonDTO, RemovePersonDTO } from "./person.dtos";
import { Person } from "./person.entity";

export interface IPersonRepository {
  findById(data: FetchPersonDTO): Promise<Person | null>;
  list(): Promise<Person[]>;
  create(data: AddPersonDTO): Promise<Person["id"] | null>;
  update(data: EditPersonDTO): Promise<void>;
  delete(data: RemovePersonDTO): Promise<void>;
}
