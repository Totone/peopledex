"use client";

import { useActionState } from "react";
import { addMilestone } from "@/ui/actions/addMilestone";
import { WithCloseDialog } from "@/ui/components/DialogButton";
import { FormContainer, TextInput } from "@/ui/components/forms";

type AddMilestoneFormProps = {
  personId: string;
} & WithCloseDialog;

export const AddMilestoneForm: React.FC<AddMilestoneFormProps> = ({
  closeDialog = () => {},
  personId,
}) => {
  const [, formAction, isPending] = useActionState((_: unknown, formData: FormData) => {
    const personId = formData.get("personId") as string;
    const description = formData.get("description") as string;
    addMilestone({ personId, description });

    closeDialog();
  }, null);

  return (
    <FormContainer formAction={formAction} isPending={isPending}>
      <input type="hidden" name="personId" value={personId} />
      <TextInput label="" name="description" placeholder="Description" required />
    </FormContainer>
  );
};
