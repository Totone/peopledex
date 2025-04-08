import { z } from "zod";

import { AddPersonSchema } from "./schemas/add-person.schema";
import { EditPersonSchema } from "./schemas/edit-person.schema";
import { FetchPersonSchema } from "./schemas/fetch-person.schema";
import { RemovePersonSchema } from "./schemas/remove-person.schema";
import { PersonInstanceSchema } from "./schemas/person-instance.schema";

export type AddPersonDTO = z.infer<typeof AddPersonSchema>;
export type EditPersonDTO = z.infer<typeof EditPersonSchema>;
export type FetchPersonDTO = z.infer<typeof FetchPersonSchema>;
export type RemovePersonDTO = z.infer<typeof RemovePersonSchema>;

export type PersonInstanceDTO = z.infer<typeof PersonInstanceSchema>;
