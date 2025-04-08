import { Person } from "@/core/person/person.entity";
import { ChannelType } from "./channel.types";

export class Channel {
  constructor(
    public id: string,
    public personId: Person["id"],
    public type: ChannelType,
    public label: string,
    public value: string
  ) {}
}
