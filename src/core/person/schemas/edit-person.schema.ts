import { z } from "zod";
import { GenderEnum, RelationEnum } from "../person.types";

export const EditPersonSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  nicknames: z.array(z.string()),
  gender: z.enum(GenderEnum),
  relation: z.enum(RelationEnum),
});
