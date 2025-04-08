import { IPersonRepository } from "../person.repository";

export function listPersonsUseCase(personRepository: IPersonRepository) {
  return async function () {
    const persons = await personRepository.list();
    return { success: true, data: persons };
  };
}
