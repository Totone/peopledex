import { LightPersonItem } from "./LightPersonItem";
import { Container, ListContainer } from "@/ui/components/containers";
import { NoOneStored } from "./NoOneStored";
import { Title } from "@/ui/components/Title";
import { LightPerson } from "@/ui/viewModels/LightPerson";

type ListFrontPageProps = {
  people: LightPerson[];
};

export const ListFrontPage: React.FC<ListFrontPageProps> = ({ people }) => {
  if (people.length === 0) return <NoOneStored />;

  return (
    <Container withVerticalSpace>
      <Title>Liste</Title>

      <ListContainer responsive>
        {people.map((person) => (
          <LightPersonItem
            key={person.id}
            id={person.id}
            name={person.name}
            nicknames={person.nicknames}
          />
        ))}
      </ListContainer>
    </Container>
  );
};
