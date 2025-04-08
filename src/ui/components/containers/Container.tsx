import { PropsWithChildren } from "react";

type ContainerProps = {
  withVerticalSpace?: boolean;
};

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  withVerticalSpace,
  children,
}) => <div className={withVerticalSpace ? "space-y-8" : ""}>{children}</div>;
