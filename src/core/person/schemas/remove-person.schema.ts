import { z } from "zod";

export const RemovePersonSchema = z.object({
  id: z.string(),
});
