import { findPersonWithId } from "@/ui/actions/findPersonWithId";
import { getMilestoneHistory } from "@/ui/actions/getMilestoneHistory";
import { ChannelItem } from "./components/ChannelItem";
import { PersonInfo } from "./components/PersonInfo";
import {
  Container,
  RowContainerOnLargeScreens,
  ContainerHeader,
  ListContainer,
} from "@/ui/components/containers";
import { PersonNotFound } from "./components/PersonNotFound";
import { Title } from "@/ui/components/Title";
import { MilestoneItem } from "./components/MilestoneItem";
import { NoItemList } from "./components/NoItemList";
import { AddChannelForm } from "./forms/AddChannelForm";
import { AddMilestoneForm } from "./forms/AddMilestoneForm";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function PersonDetailsPage({ params }: PageProps) {
  const { id } = await Promise.resolve(params);

  const person = await findPersonWithId(id);
  if (!person) return <PersonNotFound />;

  const milestones = await getMilestoneHistory(id);

  return (
    <Container withVerticalSpace>
      <Title centered>{person.name}</Title>
      <RowContainerOnLargeScreens>
        <Container withVerticalSpace>
          <ContainerHeader header="Détails" />
          <PersonInfo person={person} />
          <Container>
            <ContainerHeader
              header="Canaux de contact"
              withDialogButton
              buttonLabel="Ajouter un canal"
              dialogContent={<AddChannelForm personId={id} />}
            />

            {person.channels.length === 0 && <NoItemList itemType="channel" />}
            {person.channels.length > 0 && (
              <ListContainer>
                {person.channels.map((channel) => (
                  <ChannelItem
                    key={channel.id}
                    id={channel.id}
                    type={channel.type}
                    label={channel.label}
                    value={channel.value}
                  />
                ))}
              </ListContainer>
            )}
          </Container>
        </Container>

        <Container>
          <ContainerHeader
            header="Historique"
            withDialogButton
            buttonLabel="Ajouter une note"
            dialogContent={<AddMilestoneForm personId={id} />}
          />

          {milestones.length === 0 && <NoItemList itemType="milestone" />}
          {milestones.length > 0 && (
            <div className="space-y-2">
              {milestones.map((milestone) => (
                <MilestoneItem
                  key={milestone.id}
                  id={milestone.id}
                  type={milestone.type}
                  description={milestone.description}
                  lastUpdate={milestone.lastUpdate}
                />
              ))}
            </div>
          )}
        </Container>
      </RowContainerOnLargeScreens>
    </Container>
  );
}
