import { z } from "zod";
import { GenderEnum, RelationEnum } from "../person.types";

import { MilestoneInstanceSchema } from "@/core/milestone/schemas/milestone-instance.schema";
import { ChannelInstanceSchema } from "@/core/channel/schemas/channel-instance.schema";

export const PersonInstanceSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  nicknames: z.array(z.string()),
  gender: z.enum(GenderEnum),
  relation: z.enum(RelationEnum),
  channels: z.array(ChannelInstanceSchema),
  milestones: z.array(MilestoneInstanceSchema),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
