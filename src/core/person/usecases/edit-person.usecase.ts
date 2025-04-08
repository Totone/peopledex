import { EditPersonDTO, Person, personValidators } from "..";
import { IPersonRepository } from "../person.repository";

export function editPersonUseCase(personRepository: IPersonRepository) {
  return async function (payload: EditPersonDTO) {
    const validData = personValidators.edit(payload) as EditPersonDTO;
    if (validData === null) throw Error("Invalid input");

    const { firstname, lastname, nicknames } = payload;
    if (!Person.hasValidName(firstname, lastname, nicknames)) throw Error("Empty names");

    await personRepository.update(validData);
    return { success: true };
  };
}
