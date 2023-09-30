import { z } from "zod";

export const bookerSchema = z.object({
  schoolType: z.string(),
  city: z.string(),
  school: z.string(),
});

export type BookerForm = z.infer<typeof bookerSchema>;
