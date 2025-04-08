import { PropsWithChildren } from "react";

export const InputContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="space-y-2">{children}</div>
);
