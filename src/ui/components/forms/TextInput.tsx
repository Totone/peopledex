import { Label } from "@/ui/primitives/label";
import { Input } from "@/ui/primitives/input";
import { InputContainer } from "./InputContainer";

type TextInputControlProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextInputProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  inputControls?: TextInputControlProps;
};

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder = "",
  required = false,
  defaultValue = "",
  inputControls = undefined,
}) => {
  const extraProps = inputControls ?? {};

  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        {...extraProps}
      />
    </InputContainer>
  );
};
