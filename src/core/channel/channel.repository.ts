import { Channel } from "./channel.entity";
import {
  AddChannelDTO,
  ListChannelsDTO,
  RemoveAllChannelsDTO,
  RemoveChannelDTO,
} from "./channel.dtos";

export interface IChannelRepository {
  getById(data: Channel["id"]): Promise<Channel | null>;
  getAll(data: ListChannelsDTO): Promise<Channel[]>;
  create(data: AddChannelDTO): Promise<Channel["id"]>;
  update(data: Channel): Promise<void>;
  delete(data: RemoveChannelDTO): Promise<void>;
  deleteAll(data: RemoveAllChannelsDTO): Promise<void>;
}
