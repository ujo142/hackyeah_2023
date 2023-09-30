import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type BookerForm } from "@/schemas/bookerSchema";
import { useFormContext, type ControllerRenderProps } from "react-hook-form";

interface UniversitySelectProps {
  field: ControllerRenderProps<
    {
      universityType: string;
      city: string;
      university: string;
      direction: string;
    },
    "university"
  >;
  selectedCity?: string;
  selectedType?: string;
}

const universities = [
  {
    id: "1",
    name: "Uniwersytet Jagielloński",
    city: "krakow",
    type: ["1", "2"],
  },
  {
    id: "2",
    name: "Akademia Górniczo-Hutnicza",
    city: "krakow",
    type: ["1", "2"],
  },
  {
    id: "3",
    name: "Uniwersytet Wrocławski",
    city: "wroclaw",
    type: ["1", "2"],
  },
];

export const UniversitySelect = ({
  field,
  selectedCity,
  selectedType,
}: UniversitySelectProps) => {
  const isDisabled = !selectedCity || !selectedType;
  const { setValue } = useFormContext<BookerForm>();

  const values = universities.filter(
    (el) =>
      el.city === selectedCity && selectedType && el.type.includes(selectedType)
  );

  const changeHandler = (value: string) => {
    setValue("direction", "");
    field.onChange(value);
  };

  return (
    <Select
      disabled={isDisabled}
      onValueChange={changeHandler}
      defaultValue={field.value}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {values.map((el) => (
          <SelectItem key={el.id} value={el.id}>
            {el.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
