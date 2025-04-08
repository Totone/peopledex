import { validateSchemaData } from "@/core/_utils/validateSchemaData";

import { AddChannelSchema } from "./schemas/add-channel.schema";
import { ListChannelsSchema } from "./schemas/list-channels.schema";
import { RemoveAllChannelsSchema } from "./schemas/remove-all-channels.schema";
import { RemoveChannelSchema } from "./schemas/remove-channel.schema";
import { ChannelInstanceSchema } from "./schemas/channel-instance.schema";

export const validateChannelInstance = validateSchemaData(ChannelInstanceSchema);

export const validateAddChannel = validateSchemaData(AddChannelSchema);
export const validateListChannels = validateSchemaData(ListChannelsSchema);
export const validateRemoveAllChannels = validateSchemaData(RemoveAllChannelsSchema);
export const validateRemoveChannel = validateSchemaData(RemoveChannelSchema);

export const ChannelValidators = {
  add: validateAddChannel,
  list: validateListChannels,
  removeAll: validateRemoveAllChannels,
  remove: validateRemoveChannel,
};
