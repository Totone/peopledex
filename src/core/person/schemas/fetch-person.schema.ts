import { z } from "zod";

export const FetchPersonSchema = z.object({
  id: z.string(),
});
