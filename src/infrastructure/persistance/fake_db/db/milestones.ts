import { Milestone } from "@/core/milestone/milestone.entity";

export const milestones: Milestone[] = [
  // Milestones pour Jean Dupont (id: 1)
  new Milestone({
    id: "m1",
    personId: "1",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2021-03-15"),
  }),
  new Milestone({
    id: "m2",
    personId: "1",
    type: "manual",
    description: "Déjeuner d'affaires",
    createdAt: new Date("2021-04-20"),
  }),
  new Milestone({
    id: "m3",
    personId: "1",
    type: "auto",
    description: "Anniversaire",
    createdAt: new Date("2022-03-15"),
  }),

  // Milestones pour Marie Martin (id: 2)
  new Milestone({
    id: "m4",
    personId: "2",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2021-05-22"),
  }),
  new Milestone({
    id: "m5",
    personId: "2",
    type: "manual",
    description: "Réunion projet",
    createdAt: new Date("2021-06-15"),
  }),
  new Milestone({
    id: "m6",
    personId: "2",
    type: "manual",
    description: "Formation",
    createdAt: new Date("2021-08-10"),
  }),

  // Milestones pour Pierre Bernard (id: 3)
  new Milestone({
    id: "m7",
    personId: "3",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2021-07-10"),
  }),
  new Milestone({
    id: "m8",
    personId: "3",
    type: "manual",
    description: "Signature contrat",
    createdAt: new Date("2021-08-05"),
  }),

  // Milestones pour Sophie Petit (id: 4)
  new Milestone({
    id: "m9",
    personId: "4",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2021-09-03"),
  }),
  new Milestone({
    id: "m10",
    personId: "4",
    type: "manual",
    description: "Soirée entre amis",
    createdAt: new Date("2021-10-15"),
  }),
  new Milestone({
    id: "m11",
    personId: "4",
    type: "auto",
    description: "Anniversaire",
    createdAt: new Date("2022-09-03"),
  }),

  // Milestones pour Thomas Robert (id: 5)
  new Milestone({
    id: "m12",
    personId: "5",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2021-11-18"),
  }),
  new Milestone({
    id: "m13",
    personId: "5",
    type: "manual",
    description: "Week-end à la montagne",
    createdAt: new Date("2022-01-20"),
  }),

  // Milestones pour Julie Richard (id: 6)
  new Milestone({
    id: "m14",
    personId: "6",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2022-01-25"),
  }),
  new Milestone({
    id: "m15",
    personId: "6",
    type: "manual",
    description: "Présentation client",
    createdAt: new Date("2022-02-15"),
  }),
  new Milestone({
    id: "m16",
    personId: "6",
    type: "manual",
    description: "Formation avancée",
    createdAt: new Date("2022-04-10"),
  }),

  // Milestones pour Lucas Durand (id: 7)
  new Milestone({
    id: "m17",
    personId: "7",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2022-03-12"),
  }),
  new Milestone({
    id: "m18",
    personId: "7",
    type: "manual",
    description: "Négociation contrat",
    createdAt: new Date("2022-04-20"),
  }),

  // Milestones pour Emma Dubois (id: 8)
  new Milestone({
    id: "m19",
    personId: "8",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2022-05-30"),
  }),
  new Milestone({
    id: "m20",
    personId: "8",
    type: "manual",
    description: "Dîner en ville",
    createdAt: new Date("2022-07-15"),
  }),
  new Milestone({
    id: "m21",
    personId: "8",
    type: "auto",
    description: "Anniversaire",
    createdAt: new Date("2023-05-30"),
  }),

  // Milestones pour Hugo Moreau (id: 9)
  new Milestone({
    id: "m22",
    personId: "9",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2022-08-14"),
  }),
  new Milestone({
    id: "m23",
    personId: "9",
    type: "manual",
    description: "Match de foot",
    createdAt: new Date("2022-09-20"),
  }),

  // Milestones pour Chloé Laurent (id: 10)
  new Milestone({
    id: "m24",
    personId: "10",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2022-10-05"),
  }),
  new Milestone({
    id: "m25",
    personId: "10",
    type: "manual",
    description: "Réunion d'équipe",
    createdAt: new Date("2022-11-15"),
  }),
  new Milestone({
    id: "m26",
    personId: "10",
    type: "manual",
    description: "Formation technique",
    createdAt: new Date("2023-01-10"),
  }),

  // Milestones pour Nathan Simon (id: 11)
  new Milestone({
    id: "m27",
    personId: "11",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2022-12-20"),
  }),
  new Milestone({
    id: "m28",
    personId: "11",
    type: "manual",
    description: "Signature partenariat",
    createdAt: new Date("2023-01-15"),
  }),

  // Milestones pour Léa Michel (id: 12)
  new Milestone({
    id: "m29",
    personId: "12",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2023-02-08"),
  }),
  new Milestone({
    id: "m30",
    personId: "12",
    type: "manual",
    description: "Soirée cinéma",
    createdAt: new Date("2023-03-20"),
  }),
  new Milestone({
    id: "m31",
    personId: "12",
    type: "auto",
    description: "Anniversaire",
    createdAt: new Date("2024-02-08"),
  }),

  // Milestones pour Maxime Lefebvre (id: 13)
  new Milestone({
    id: "m32",
    personId: "13",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2023-04-17"),
  }),
  new Milestone({
    id: "m33",
    personId: "13",
    type: "manual",
    description: "Week-end à la mer",
    createdAt: new Date("2023-06-15"),
  }),

  // Milestones pour Manon Leroy (id: 14)
  new Milestone({
    id: "m34",
    personId: "14",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2023-06-22"),
  }),
  new Milestone({
    id: "m35",
    personId: "14",
    type: "manual",
    description: "Présentation projet",
    createdAt: new Date("2023-07-15"),
  }),
  new Milestone({
    id: "m36",
    personId: "14",
    type: "manual",
    description: "Formation management",
    createdAt: new Date("2023-09-10"),
  }),

  // Milestones pour Enzo Roux (id: 15)
  new Milestone({
    id: "m37",
    personId: "15",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2023-08-09"),
  }),
  new Milestone({
    id: "m38",
    personId: "15",
    type: "manual",
    description: "Négociation commerciale",
    createdAt: new Date("2023-09-20"),
  }),

  // Milestones pour Camille David (id: 16)
  new Milestone({
    id: "m39",
    personId: "16",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2023-10-14"),
  }),
  new Milestone({
    id: "m40",
    personId: "16",
    type: "manual",
    description: "Dîner entre amis",
    createdAt: new Date("2023-11-15"),
  }),
  new Milestone({
    id: "m41",
    personId: "16",
    type: "auto",
    description: "Anniversaire",
    createdAt: new Date("2024-10-14"),
  }),

  // Milestones pour Louis Bertrand (id: 17)
  new Milestone({
    id: "m42",
    personId: "17",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2023-12-01"),
  }),
  new Milestone({
    id: "m43",
    personId: "17",
    type: "manual",
    description: "Match de tennis",
    createdAt: new Date("2024-01-15"),
  }),

  // Milestones pour Sarah Morel (id: 18)
  new Milestone({
    id: "m44",
    personId: "18",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2024-01-15"),
  }),
  new Milestone({
    id: "m45",
    personId: "18",
    type: "manual",
    description: "Réunion stratégique",
    createdAt: new Date("2024-02-01"),
  }),
  new Milestone({
    id: "m46",
    personId: "18",
    type: "manual",
    description: "Formation leadership",
    createdAt: new Date("2024-03-01"),
  }),

  // Milestones pour Gabriel Fournier (id: 19)
  new Milestone({
    id: "m47",
    personId: "19",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2024-02-28"),
  }),
  new Milestone({
    id: "m48",
    personId: "19",
    type: "manual",
    description: "Signature contrat",
    createdAt: new Date("2024-03-15"),
  }),

  // Milestones pour Zoé Girard (id: 20)
  new Milestone({
    id: "m49",
    personId: "20",
    type: "auto",
    description: "Premier contact",
    createdAt: new Date("2024-03-10"),
  }),
  new Milestone({
    id: "m50",
    personId: "20",
    type: "manual",
    description: "Soirée théâtre",
    createdAt: new Date("2024-03-20"),
  }),
];
