import { cn } from "@/ui/utils/lib/utils";
import { PropsWithChildren } from "react";

type TitleProps = {
  centered?: boolean;
};

export const Title: React.FC<PropsWithChildren<TitleProps>> = ({ centered = false, children }) => {
  return <h1 className={cn("text-2xl font-bold", centered && "text-center")}>{children}</h1>;
};
