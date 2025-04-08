import { FetchPersonDTO, personValidators } from "..";
import { IPersonRepository } from "../person.repository";

export function fetchPersonUseCase(personRepository: IPersonRepository) {
  return async function (payload: FetchPersonDTO) {
    const validData = personValidators.fetch(payload) as FetchPersonDTO;
    if (validData === null) throw Error("Invalid input");

    const person = await personRepository.findById(validData);
    if (!person) throw Error("Person not found");

    return { success: true, data: person };
  };
}
