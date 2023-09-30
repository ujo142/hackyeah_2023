"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@/hooks/useMutation";
import {
  sendMessageSchema,
  type ISendMessage,
} from "@/schemas/sendMessageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const SendMessage = () => {
  const form = useForm<ISendMessage>({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      message: "",
    },
  });

  const { mutate: sendMessage, isMutating } = useMutation<ISendMessage>({
    query: "/api/text_1",
    method: "POST",
    onSuccess: (data) => console.log(data),
    onError: (errorMessage) => console.log(errorMessage),
  });

  const onSubmit = (values: ISendMessage) => {
    sendMessage({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full mt-auto justify-between p-6 border-t border-border "
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Wpisz swoją wiadomość..."
                  {...field}
                  className="w-full rounded-none"
                />
              </FormControl>
              <FormMessage className="text-xs m-0" />
            </FormItem>
          )}
        />
        <Button
          disabled={isMutating}
          aria-disabled={isMutating}
          type="submit"
          className="rounded-none"
        >
          Wyślij
        </Button>
      </form>
    </Form>
  );
};
