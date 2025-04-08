import { z } from "zod";
import { ChannelInstanceSchema } from "./schemas/channel-instance.schema";
import { AddChannelSchema } from "./schemas/add-channel.schema";
import { ListChannelsSchema } from "./schemas/list-channels.schema";
import { RemoveAllChannelsSchema } from "./schemas/remove-all-channels.schema";
import { RemoveChannelSchema } from "./schemas/remove-channel.schema";

export type ChannelInstanceDTO = z.infer<typeof ChannelInstanceSchema>;

export type AddChannelDTO = z.infer<typeof AddChannelSchema>;
export type ListChannelsDTO = z.infer<typeof ListChannelsSchema>;
export type RemoveAllChannelsDTO = z.infer<typeof RemoveAllChannelsSchema>;
export type RemoveChannelDTO = z.infer<typeof RemoveChannelSchema>;
