import { Channel } from "@/core/channel/channel.entity";
import { Milestone } from "@/core/milestone/milestone.entity";
import { PersonGender, PersonRelation } from "./person.types";
import { PersonInstanceDTO } from "./person.dtos";

export class Person {
  public id: string;
  public firstname: string;
  public lastname: string;
  public nicknames: string[];
  public channels?: Channel[];
  public milestones?: Milestone[];
  public gender: PersonGender;
  public relation: PersonRelation;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(params: PersonInstanceDTO) {
    const {
      id,
      firstname = "",
      lastname = "",
      nicknames = [],
      gender = "Other",
      relation = "None",
      channels = [],
      milestones = [],
      createdAt,
      updatedAt,
    } = params;

    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.nicknames = nicknames;
    this.channels = channels;
    this.milestones = milestones;
    this.gender = gender;
    this.relation = relation;
    this.createdAt = createdAt ?? new Date();
    if (updatedAt) this.updatedAt = updatedAt;
  }

  static hasValidName(firstname: string, lastname: string, nicknames: string[]): boolean {
    if (!firstname.trim() && !lastname.trim() && (!nicknames || nicknames.length === 0)) {
      // throw new Error("At least one of firstname, lastname or nicknames must be provided.");
      return false;
    }
    return true;
  }

  static setDefaultGender: () => Person["gender"] = () => "Other";
  static setDefaultRelation: () => Person["relation"] = () => "None";
}
