import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/primitives/select";
import { Label } from "@/ui/primitives/label";
import { InputContainer } from "./InputContainer";
import { FormSelectionItem } from "./types";

type SelectInputItemProps = FormSelectionItem;

export const SelectInputItem: React.FC<SelectInputItemProps> = ({ label, value }) => (
  <SelectItem value={value}>{label}</SelectItem>
);

type SelectInputProps = {
  label: string;
  groupName: string;
  defaultValue?: string;
  placeholder?: string;
  items: SelectInputItemProps[];
};
export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  groupName,
  defaultValue,
  placeholder,
  items,
}) => (
  <InputContainer>
    <Label htmlFor={groupName}>{label}</Label>
    <Select name={groupName} defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </InputContainer>
);
