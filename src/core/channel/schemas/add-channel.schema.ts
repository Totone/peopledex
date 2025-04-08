import { z } from "zod";
import { TypeEnum } from "../channel.types";

export const AddChannelSchema = z.object({
  personId: z.string(),
  type: z.enum(TypeEnum),
  label: z.string().min(1),
  value: z.string().min(1),
});
