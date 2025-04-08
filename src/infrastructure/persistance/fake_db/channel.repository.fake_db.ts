import { Channel } from "@/core/channel/channel.entity";
import {
  AddChannelDTO,
  ListChannelsDTO,
  RemoveAllChannelsDTO,
  RemoveChannelDTO,
} from "@/core/channel/channel.dtos";
import { IChannelRepository } from "@/core/channel/channel.repository";
import { channels } from "./db/channels";

export class ChannelRepositoryFakeDB implements IChannelRepository {
  async getById(data: Channel["id"]): Promise<Channel | null> {
    return channels.find((channel) => channel.id === data) || null;
  }

  async getAll(data: ListChannelsDTO): Promise<Channel[]> {
    return channels.filter((channel) => channel.personId === data.personId);
  }

  async create(data: AddChannelDTO): Promise<Channel["id"]> {
    const channel: Channel = {
      ...data,
      id: crypto.randomUUID(),
    };
    channels.push(channel);
    return channel.id;
  }

  async update(data: Channel): Promise<void> {
    const index = channels.findIndex((channel) => channel.id === data.id);
    if (index === -1) {
      throw new Error("Channel not found");
    }
    channels[index] = {
      ...channels[index],
      ...data,
    };
  }

  async delete(data: RemoveChannelDTO): Promise<void> {
    const index = channels.findIndex((channel) => channel.id === data.id);
    if (index === -1) {
      throw new Error("Channel not found");
    }
    channels.splice(index, 1);
  }

  async deleteAll(data: RemoveAllChannelsDTO): Promise<void> {
    const personChannels = channels.filter((channel) => channel.personId === data.personId);
    personChannels.forEach((channel) => {
      const index = channels.findIndex((c) => c.id === channel.id);
      if (index !== -1) {
        channels.splice(index, 1);
      }
    });
  }
}
