type NoItemListProps = {
  itemType: "milestone" | "channel";
};

export const NoItemList: React.FC<NoItemListProps> = ({ itemType }) => {
  const labels: { [K in NoItemListProps["itemType"]]: string } = {
    channel: "Aucun canal de contact enregistré.",
    milestone: "Aucune note ou historique enregistré.",
  };

  return <p className="text-gray-500">{labels[itemType]}</p>;
};
