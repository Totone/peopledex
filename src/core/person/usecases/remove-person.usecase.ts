import { RemovePersonDTO, personValidators } from "..";
import { IPersonRepository } from "../person.repository";

export function removePersonUseCase(personRepository: IPersonRepository) {
  return async function (payload: RemovePersonDTO) {
    const validData = personValidators.remove(payload) as RemovePersonDTO;
    if (validData === null) throw Error("Invalid input");

    await personRepository.delete(validData);
    return { success: true };
  };
}
