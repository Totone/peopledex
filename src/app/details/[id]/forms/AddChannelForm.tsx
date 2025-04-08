"use client";

import { useActionState } from "react";
import { addChannel } from "@/ui/actions/addChannel";
import { WithCloseDialog } from "@/ui/components/DialogButton";
import { FormContainer, RadioInput, TextInput } from "@/ui/components/forms";
//import { useRouter } from "next/navigation";

type AddChannelFormProps = {
  personId: string;
} & WithCloseDialog;

type ChannelType = "phone" | "email" | "social";

export const AddChannelForm: React.FC<AddChannelFormProps> = ({
  closeDialog = () => {},
  personId,
}: AddChannelFormProps) => {
  //const router = useRouter();
  const [, formAction, isPending] = useActionState((_: unknown, formData: FormData) => {
    const personId = formData.get("personId") as string;
    const type = formData.get("type") as ChannelType;
    const label = formData.get("label") as string;
    const value = formData.get("value") as string;

    addChannel({ personId, type, label, value });
    closeDialog();
  }, null);

  return (
    <FormContainer formAction={formAction} isPending={isPending}>
      <input type="hidden" name="personId" value={personId} />

      <RadioInput
        label="Type"
        groupName="type"
        defaultValue="phone"
        items={[
          { label: "Téléphone", value: "phone" },
          { label: "Email", value: "email" },
          { label: "Réseau social", value: "social" },
        ]}
      />
      <TextInput label="Label" name="label" placeholder="Ex: Mobile, Bureau,.." required />
      <TextInput label="Valeur" name="value" placeholder="Ex: +33 6 12 34 56 78" required />
    </FormContainer>
  );
};
