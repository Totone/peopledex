import { z } from "zod";

import { MilestoneInstanceSchema } from "./schemas/milestone-instance.schema";
import { AddMilestoneSchema } from "./schemas/add-milestone.schema";
import { RemoveMilestoneSchema } from "./schemas/remove-milestone.schema";
import { FetchMilestoneHistorySchema } from "./schemas/fetch-milestone-history.schema";
import { RemoveMilestoneHistorySchema } from "./schemas/remove-milestone-history.schema";

export type MilestoneInstanceDTO = z.infer<typeof MilestoneInstanceSchema>;
export type AddMilestoneDTO = z.infer<typeof AddMilestoneSchema>;
export type RemoveMilestoneDTO = z.infer<typeof RemoveMilestoneSchema>;
export type FetchMilestoneHistoryDTO = z.infer<typeof FetchMilestoneHistorySchema>;
export type RemoveMilestoneHistoryDTO = z.infer<typeof RemoveMilestoneHistorySchema>;
