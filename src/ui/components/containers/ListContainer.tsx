import { PropsWithChildren } from "react";

type ListContainerProps = {
  responsive?: boolean;
};

export const ListContainer: React.FC<PropsWithChildren<ListContainerProps>> = ({
  responsive = false,
  children,
}) => {
  const styles = {
    classic: "space-y-2",
    responsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  };
  return <div className={responsive ? styles.responsive : styles.classic}>{children}</div>;
};
