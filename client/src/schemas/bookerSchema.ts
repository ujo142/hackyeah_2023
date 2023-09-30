import { z } from "zod";

export const bookerSchema = z.object({
  universityType: z.string().min(1, "Wymagane"),
  city: z.string().min(1, "Wymagane"),
  university: z.string().min(1, "Wymagane"),
  direction: z.string().min(1, "Wymagane"),
});

export type BookerForm = z.infer<typeof bookerSchema>;
