import { z } from "zod";

export const ListChannelsSchema = z.object({
  personId: z.string(),
});
