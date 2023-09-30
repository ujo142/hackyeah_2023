import { z } from "zod";

export const sendMessageSchema = z.object({
  message: z.string().min(1, "Wiadomość nie może być pusta!"),
});

export type ISendMessage = z.infer<typeof sendMessageSchema>;
