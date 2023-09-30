"use client";

import { bookerSchema, type BookerForm } from "@/schemas/bookerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Booker = () => {
  const form = useForm<BookerForm>({
    resolver: zodResolver(bookerSchema),
  });

  return (
    <div className="flex flex-col gap-4 p-4 border border-border rounded-sm min-w-[400px]">
      <h2 className="text-center text-xl font-semibold">Rezerwacja</h2>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="schoolType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybierz typ uczelni</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Uczelnia 1 stopnia</SelectItem>
                    <SelectItem value="2">Uczelnia 2 stopnia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schoolType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybierz typ uczelni</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Uczelnia 1 stopnia</SelectItem>
                    <SelectItem value="2">Uczelnia 2 stopnia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
