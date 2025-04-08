import Link from "next/link";
import { Button } from "@/ui/primitives/button";

export const PersonNotFound: React.FC = () => (
  <div className="text-center p-8">
    <h1 className="text-2xl font-bold mb-4">Personne non trouvée</h1>
    <p>La personne que vous recherchez n&apos;existe pas.</p>
    <Link href="/list" className="mt-4 block">
      <Button>Retour à la recherche</Button>
    </Link>
  </div>
);
