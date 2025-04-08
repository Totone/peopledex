import { Person } from "@/core/person/person.entity";

import { MilestoneType } from "./milestone.types";
import { MilestoneInstanceDTO } from "./milestone.dtos";

export class Milestone {
  public id: string;
  public personId: Person["id"];
  public type: MilestoneType;
  public description: string;
  public createdAt: Date;
  public updatedAt?: Date;

  constructor(params: MilestoneInstanceDTO) {
    this.id = params.id;
    this.personId = params.personId;
    this.type = params.type;
    this.description = params.description;
    this.createdAt = params.createdAt;
    if (params.updatedAt) this.updatedAt = params.updatedAt;
  }
}
