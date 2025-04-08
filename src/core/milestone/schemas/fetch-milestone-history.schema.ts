import { z } from "zod";

export const FetchMilestoneHistorySchema = z.object({
  personId: z.string(),
});
