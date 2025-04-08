import { Button } from "@/ui/primitives/button";
import { PropsWithChildren } from "react";

type FormContainerProps = {
  formAction: (payload: FormData) => void;
  isPending: boolean;
};

export const FormContainer: React.FC<PropsWithChildren<FormContainerProps>> = ({
  formAction,
  isPending,
  children,
}) => (
  <form action={formAction} className="space-y-4">
    {children}
    <Button type="submit" disabled={isPending}>
      {isPending ? "Envoi..." : "Envoyer"}
    </Button>
  </form>
);
