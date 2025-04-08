"use client";

import { URLS } from "@/ui/_config/urls";
import { Card, CardContent } from "@/ui/primitives/card";
import { LightPerson } from "@/ui/viewModels/LightPerson";
import Link from "next/link";

type LightPersonItemProps = Pick<LightPerson, "id" | "name" | "nicknames">;

export const LightPersonItem: React.FC<LightPersonItemProps> = ({
  id,
  name,
  nicknames,
}: LightPersonItemProps) => {
  return (
    <Link href={URLS.details(id)}>
      <Card className="w-full mb-2 cursor-pointer hover:shadow-md transition-shadow">
        <CardContent className="p-2">
          <h3 className="text-base font-semibold">{name}</h3>
          {nicknames.length > 0 && <p className="text-xs text-gray-600">{nicknames.join(", ")}</p>}
        </CardContent>
      </Card>
    </Link>
  );
};
