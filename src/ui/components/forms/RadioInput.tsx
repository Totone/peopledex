import { Label } from "@/ui/primitives/label";
import { RadioGroup, RadioGroupItem } from "@/ui/primitives/radio-group";
import { FormSelectionItem } from "./types";
import { InputContainer } from "./InputContainer";

type RadioInputItemProps = FormSelectionItem;

export const RadioInputItem: React.FC<RadioInputItemProps> = ({ label, value }) => (
  <div className="flex items-center space-x-2">
    <RadioGroupItem value={value} id={value} />
    <Label htmlFor={value}>{label}</Label>
  </div>
);

type RadioInputProps = {
  label: string;
  groupName: string;
  defaultValue?: string;
  items: RadioInputItemProps[];
};

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  groupName,
  defaultValue,
  items,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <RadioGroup name={groupName} defaultValue={defaultValue} className="flex gap-4">
        {items.map((item) => (
          <RadioInputItem key={item.value} label={item.label} value={item.value} />
        ))}
      </RadioGroup>
    </InputContainer>
  );
};
