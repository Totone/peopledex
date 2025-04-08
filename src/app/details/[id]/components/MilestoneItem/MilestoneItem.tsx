import { Card, CardContent, CardFooter } from "@/ui/primitives/card";
import { cn } from "@/ui/utils/lib/utils";

type MilestoneItemProps = {
  id: string;
  type: "auto" | "manual";
  description: string;
  lastUpdate: string;
};

export const MilestoneItem: React.FC<MilestoneItemProps> = ({ type, description, lastUpdate }) => {
  return (
    <Card className={cn("w-full mb-1", type === "auto" ? "bg-blue-50" : "bg-amber-50")}>
      <CardContent className="pt-1.5">
        <p className="text-gray-800 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="text-xs text-gray-500 justify-end py-0.5">{lastUpdate}</CardFooter>
    </Card>
  );
};
