import { z } from "zod";
import { GenderEnum, RelationEnum } from "../person.types";

export const AddPersonSchema = z.object({
  firstname: z.string().optional().default(""),
  lastname: z.string().optional().default(""),
  nicknames: z.array(z.string()).optional().default([]),
  gender: z.enum(GenderEnum).optional().default("Other"),
  relation: z.enum(RelationEnum).optional().default("None"),
});
