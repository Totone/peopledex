"use server";

type Milestone = {
  id: string;
  personId: string;
  type: "auto" | "manual";
  description: string;
  lastUpdate: string;
};

export const getMilestoneHistory = async (personId: string): Promise<Milestone[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "milestone-1",
      personId,
      type: "manual",
      description: "Première rencontre lors de la conférence React Paris",
      lastUpdate: "2023-06-15T10:30:00Z",
    },
    {
      id: "milestone-2",
      personId,
      type: "auto",
      description: "A ajouté comme contact sur LinkedIn",
      lastUpdate: "2023-07-02T14:45:00Z",
    },
    {
      id: "milestone-3",
      personId,
      type: "manual",
      description: "Discussion sur les nouvelles fonctionnalités de Next.js",
      lastUpdate: "2023-09-10T16:20:00Z",
    },
  ];
};
