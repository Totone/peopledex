import { z } from "zod";
import { TypeEnum } from "../milestone.types";

export const MilestoneInstanceSchema = z.object({
  id: z.string(),
  personId: z.string(),
  type: z.enum(TypeEnum),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
