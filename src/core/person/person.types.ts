export const GenderEnum = ["Male", "Female", "Other"] as const;

export const RelationEnum = [
  "None",
  "Professional acquaintance",
  "Private acquaintance",
  "Business mate",
  "Friend",
] as const;

export type PersonGender = (typeof GenderEnum)[number];
export type PersonRelation = (typeof RelationEnum)[number];
