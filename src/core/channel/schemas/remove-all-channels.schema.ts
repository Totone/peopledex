import { z } from "zod";

export const RemoveAllChannelsSchema = z.object({
  personId: z.string(),
});
