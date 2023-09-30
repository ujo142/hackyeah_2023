"use client";

import { bookerSchema, type BookerForm } from "@/schemas/bookerSchema";
import { useForm, type ControllerRenderProps } from "react-hook-form";
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
import { Button } from "../ui/button";
import { UniversitySelect } from "./UniversitySelect";
import { useMutation } from "@/hooks/useMutation";
import { toast } from "../ui/use-toast";
import { DirectionSelect } from "./DirectionSelect";

type fieldType = ControllerRenderProps<
  {
    universityType: string;
    city: string;
    university: string;
    direction: string;
  },
  "universityType" | "city"
>;

export const Booker = () => {
  const form = useForm<BookerForm>({
    resolver: zodResolver(bookerSchema),
  });
  const { watch, handleSubmit, setValue } = form;

  const { mutate, isMutating } = useMutation<unknown, BookerForm>({
    query: "/api/book",
    method: "POST",
    onSuccess: () =>
      toast({
        variant: "default",
        title: "Sukces",
        description:
          "Pomyślnie zarejestrowano, sprawdź swoją skrzynkę pocztową po więcej szczegółów. ",
      }),
    onError: () =>
      toast({
        variant: "destructive",
        title: "Błąd!",
        description: "Coś poszło nie tak, spróbuj ponownie później",
      }),
  });

  const onSubmit = (values: BookerForm) => {
    mutate(values);
  };

  const changeHandler = (field: fieldType, value: string) => {
    setValue("university", "");
    setValue("direction", "");
    field.onChange(value);
  };

  return (
    <div className="flex flex-col gap-4 p-4 border border-border rounded-sm min-w-[400px]">
      <h2 className="text-center text-xl font-semibold">Rezerwacja</h2>
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="universityType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybierz typ uczelni</FormLabel>
                <Select
                  onValueChange={(value) => changeHandler(field, value)}
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybierz miasto</FormLabel>
                <Select
                  onValueChange={(value) => changeHandler(field, value)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="krakow">Kraków</SelectItem>
                    <SelectItem value="warszawa">Warszawa</SelectItem>
                    <SelectItem value="gdansk">Gdańsk</SelectItem>
                    <SelectItem value="wroclaw">Wrocław</SelectItem>
                    <SelectItem value="poznan">Poznań</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybierz uczelnię</FormLabel>
                <UniversitySelect
                  key={field.value}
                  field={field}
                  selectedCity={watch("city")}
                  selectedType={watch("universityType")}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="direction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybierz kierunek</FormLabel>
                <DirectionSelect
                  key={field.value}
                  field={field}
                  selectedUniversity={watch("university")}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isMutating}
            aria-disabled={isMutating}
            className="w-full"
            type="submit"
          >
            Zarezerwuj
          </Button>
        </form>
      </Form>
    </div>
  );
};
