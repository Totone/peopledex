"use client";

import { useActionState } from "react";
import { updatePerson } from "@/ui/actions/updatePerson";
import { FormContainer, RadioInput, SelectInput, TextInput } from "@/ui/components/forms";

type Person = {
  id: string;
  firstname: string;
  lastname: string;
  nicknames: string[];
  gender: string;
  relation: string;
};

type UpdatePersonFormProps = {
  person: Person;
};

export const UpdatePersonForm: React.FC<UpdatePersonFormProps> = ({ person }) => {
  const [, formAction, isPending] = useActionState((_: unknown, formData: FormData) => {
    const id = formData.get("id") as string;
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const nicknames = (formData.get("nicknames") as string).split(",");
    const gender = formData.get("gender") as string;
    const relation = formData.get("relation") as string;

    return updatePerson({ id, firstname, lastname, nicknames, gender, relation });
  }, null);

  return (
    <FormContainer formAction={formAction} isPending={isPending}>
      <input type="hidden" name="id" value={person.id} />

      <TextInput name="lastname" label="Nom" defaultValue={person.lastname} />
      <TextInput name="firstname" label="Prénom" defaultValue={person.firstname} />
      <TextInput name="nicknames" label="Surnoms" defaultValue={person.nicknames.join(", ")} />

      <RadioInput
        label="Genre"
        groupName="gender"
        defaultValue={person.gender}
        items={[
          { value: "male", label: "Masculin" },
          { value: "female", label: "Féminin" },
          { value: "other", label: "Autre" },
        ]}
      />

      <SelectInput
        label="Relation"
        groupName="relation"
        defaultValue={person.relation}
        items={[
          { value: "None", label: "Aucune" },
          { value: "Professional acquaintance", label: "Connaissance professionnelle" },
          { value: "Private acquaintance", label: "Connaissance privée" },
          { value: "Business mate", label: "Collègue" },
          { value: "Friend", label: "Ami" },
        ]}
      />
    </FormContainer>
  );
};
