import { use, Suspense } from "react";
import { listPeople } from "@/ui/actions/listPeople";
import { ListFrontPage } from "./ListFrontPage";
import { LoadingSpinner } from "../../ui/components/LoadingSpinner";

const PageOnceLoaded: React.FC = () => {
  const list = use(listPeople());
  return <ListFrontPage people={list} />;
};

export default async function ListPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PageOnceLoaded />
    </Suspense>
  );
}
