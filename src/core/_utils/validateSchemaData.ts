import { ZodSchema } from "zod";

export function validateSchemaData<T>(schema: ZodSchema<T>) {
  return function (data: unknown): T | null {
    const result = schema.safeParse(data);

    if (!result.success) return null;
    return result.data;
  };
}
