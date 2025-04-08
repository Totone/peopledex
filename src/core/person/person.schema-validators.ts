import { validateSchemaData } from "@/core/_utils/validateSchemaData";

import { PersonInstanceSchema } from "./schemas/person-instance.schema";
import { AddPersonSchema } from "./schemas/add-person.schema";
import { EditPersonSchema } from "./schemas/edit-person.schema";
import { RemovePersonSchema } from "./schemas/remove-person.schema";
import { FetchPersonSchema } from "./schemas/fetch-person.schema";

export const validatePersonInstance = validateSchemaData(PersonInstanceSchema);

export const validateAddPerson = validateSchemaData(AddPersonSchema);
export const validateEditPerson = validateSchemaData(EditPersonSchema);
export const validateFetchPerson = validateSchemaData(FetchPersonSchema);
export const validateRemovePerson = validateSchemaData(RemovePersonSchema);

export const personValidators = {
  add: validateAddPerson,
  edit: validateEditPerson,
  fetch: validateFetchPerson,
  remove: validateRemovePerson,
};
