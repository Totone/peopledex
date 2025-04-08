import { z } from "zod";

export const RemoveChannelSchema = z.object({
  id: z.string(),
});
