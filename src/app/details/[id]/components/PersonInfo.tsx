import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/ui/primitives/card";

type Person = {
  nicknames: string[];
  gender: string;
  relation: string;
};

type PersonInfoProps = {
  person: Person;
};

export const PersonInfo: React.FC<PersonInfoProps> = ({ person }: PersonInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations</CardTitle>
        {person.nicknames.length > 0 && (
          <CardDescription>Aussi connu comme: {person.nicknames.join(", ")}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <span className="font-medium">Genre:</span> {person.gender}
        </div>

        <div>
          <span className="font-medium">Relation:</span> {person.relation}
        </div>
      </CardContent>
    </Card>
  );
};
