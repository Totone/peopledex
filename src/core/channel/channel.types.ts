export const TypeEnum = ["phone", "email", "social"] as const;

export type ChannelType = (typeof TypeEnum)[number];
