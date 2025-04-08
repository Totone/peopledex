import { AddPersonDTO, Person, personValidators } from "..";
import { IPersonRepository } from "../person.repository";

export function addPersonUseCase(personRepository: IPersonRepository) {
  return async function (payload: AddPersonDTO) {
    const validData = personValidators.add(payload) as AddPersonDTO;
    if (validData === null) throw Error("Invalid input");

    const { firstname, lastname, nicknames } = payload;
    if (!Person.hasValidName(firstname, lastname, nicknames)) throw Error("Empty names");

    const newPersonId = await personRepository.create(validData);
    return { success: true, data: { id: newPersonId } };
  };
}
