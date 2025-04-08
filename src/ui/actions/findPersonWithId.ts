"use server";

type Person = {
  id: string;
  name: string;
  firstname: string;
  lastname: string;
  nicknames: string[];
  gender: string;
  relation: string;
  channels: {
    id: string;
    type: "phone" | "email" | "social";
    label: string;
    value: string;
  }[];
};

export const findPersonWithId = async (id: string): Promise<Person | null> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id,
    name: "Marie Dupont",
    firstname: "Marie",
    lastname: "Dupont",
    nicknames: ["MarieD", "MD"],
    gender: "Femme",
    relation: "Collègue",
    channels: [
      {
        id: "channel-1",
        type: "email",
        label: "Email professionnel",
        value: "marie.dupont@example.com",
      },
      {
        id: "channel-2",
        type: "phone",
        label: "Téléphone portable",
        value: "+33612345678",
      },
      {
        id: "channel-3",
        type: "social",
        label: "LinkedIn",
        value: "https://linkedin.com/in/mariedupont",
      },
    ],
  };
};
