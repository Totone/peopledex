export const TypeEnum = ["auto", "manual"] as const;

export type MilestoneType = (typeof TypeEnum)[number];
