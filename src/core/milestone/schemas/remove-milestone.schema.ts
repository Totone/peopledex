import { z } from "zod";

export const RemoveMilestoneSchema = z.object({
  id: z.string(),
});
