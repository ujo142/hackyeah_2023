import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ControllerRenderProps } from "react-hook-form";

interface DirectionSelectProps {
  field: ControllerRenderProps<
    {
      universityType: string;
      city: string;
      university: string;
      direction: string;
    },
    "direction"
  >;
  selectedUniversity?: string;
}

const directions = [
  {
    id: "1",
    name: "Informatyka",
    universities: ["1", "2"],
  },
  {
    id: "2",
    name: "Architektura",
    universities: ["1", "3"],
  },
];

export const DirectionSelect = ({
  field,
  selectedUniversity,
}: DirectionSelectProps) => {
  const values = directions.filter(
    (el) => selectedUniversity && el.universities.includes(selectedUniversity)
  );

  return (
    <Select
      disabled={!selectedUniversity}
      onValueChange={field.onChange}
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
