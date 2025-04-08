import { PropsWithChildren } from "react";

export const RowContainerOnLargeScreens: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 lg:space-y-0">{children}</div>
);
