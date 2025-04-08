import { ReactElement } from "react";
import { DialogButton } from "../DialogButton";

type ContainerHeaderProps = {
  header: string;
  withDialogButton?: boolean;
  buttonLabel?: string;
  dialogContent?: ReactElement;
};

export const ContainerHeader: React.FC<ContainerHeaderProps> = ({
  header,
  withDialogButton = false,
  buttonLabel = "",
  dialogContent = <></>,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{header}</h2>
      {withDialogButton && <DialogButton buttonLabel={buttonLabel} component={dialogContent} />}
    </div>
  );
};
