"use client";

import { useActionState } from "react";
import { FormContainer, RadioInput, SelectInput, TextInput } from "@/ui/components/forms";
import { addPerson } from "@/ui/actions/addPerson";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/primitives/card";

export const AddForm: React.FC = () => {
  const [, formAction, isPending] = useActionState((_: unknown, formData: FormData) => {
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const nicknames = (formData.get("nicknames") as string).split(",");
    const gender = formData.get("gender") as string;
    const relation = formData.get("relation") as string;

    addPerson({
      firstname,
      lastname,
      nicknames,
      gender,
      relation,
    });
  }, null);
  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter une personne</CardTitle>
        </CardHeader>
        <CardContent>
          <FormContainer formAction={formAction} isPending={isPending}>
            <TextInput name="lastname" label="Nom" placeholder="Ex: Doe" />
            <TextInput name="firstname" label="Prénom" placeholder="Ex: John" />
            <TextInput
              name="nicknames"
              label="Surnoms"
              placeholder="Séparez les surnoms avec des virgules"
            />

            <RadioInput
              label="Genre"
              groupName="gender"
              items={[
                { value: "male", label: "Masculin" },
                { value: "female", label: "Féminin" },
                { value: "other", label: "Autre" },
              ]}
            />

            <SelectInput
              label="Relation"
              groupName="relation"
              defaultValue="None"
              items={[
                { value: "None", label: "Aucune" },
                { value: "Professional acquaintance", label: "Connaissance professionnelle" },
                { value: "Private acquaintance", label: "Connaissance privée" },
                { value: "Business mate", label: "Collègue" },
                { value: "Friend", label: "Ami" },
              ]}
            />
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
};
