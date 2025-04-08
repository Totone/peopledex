"use server";

import { LightPerson } from "../viewModels/LightPerson";

export const listPeople = async (search?: string): Promise<LightPerson[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const people: LightPerson[] = [
    {
      id: "person-1",
      name: "Marie Dupont",
      nicknames: ["MarieD", "MD"],
      gender: "Femme",
      relation: "Collègue",
    },
    {
      id: "person-2",
      name: "Jean Martin",
      nicknames: ["JM"],
      gender: "Homme",
      relation: "Client",
    },
    {
      id: "person-3",
      name: "Sophie Lefebvre",
      nicknames: ["Soso"],
      gender: "Femme",
      relation: "Partenaire",
    },
    {
      id: "person-4",
      name: "Thomas Bernard",
      nicknames: [],
      gender: "Homme",
      relation: "Conférence",
    },
  ];

  if (search) {
    const searchLower = search.toLowerCase();
    return people.filter(
      (person) =>
        person.name.toLowerCase().includes(searchLower) ||
        person.nicknames.some((nick) => nick.toLowerCase().includes(searchLower))
    );
  }

  return people;
};
