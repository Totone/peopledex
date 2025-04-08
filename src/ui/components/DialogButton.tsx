"use client";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/primitives/dialog";
import { Button } from "@/ui/primitives/button";
import { useState, cloneElement, ReactElement } from "react";

type DialogButtonProps = {
  buttonLabel: string;
  component: React.ReactElement<WithCloseDialog>;
};

export const DialogButton: React.FC<DialogButtonProps> = ({ buttonLabel, component }) => {
  const [open, setOpen] = useState(false);

  const enhanced: ReactElement = cloneElement(component, { closeDialog: () => setOpen(false) });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{buttonLabel}</DialogTitle>
        </DialogHeader>
        {enhanced}
      </DialogContent>
    </Dialog>
  );
};

export type WithCloseDialog = { closeDialog?: () => void };
