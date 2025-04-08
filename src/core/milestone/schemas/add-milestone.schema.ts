import { z } from "zod";
import { TypeEnum } from "../milestone.types";

export const AddMilestoneSchema = z.object({
  personId: z.string(),
  type: z.enum(TypeEnum).optional().default("manual"),
  description: z.string().min(1),
});
