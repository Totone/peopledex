import { z } from "zod";
import { TypeEnum } from "../channel.types";

export const ChannelInstanceSchema = z.object({
  id: z.string(),
  personId: z.string(),
  type: z.enum(TypeEnum),
  label: z.string().min(1),
  value: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
