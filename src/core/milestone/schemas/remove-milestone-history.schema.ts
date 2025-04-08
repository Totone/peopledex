import { z } from "zod";

export const RemoveMilestoneHistorySchema = z.object({
  personId: z.string(),
});
