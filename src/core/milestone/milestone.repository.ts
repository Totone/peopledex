import { Milestone } from "./milestone.entity";
import {
  AddMilestoneDTO,
  FetchMilestoneHistoryDTO,
  RemoveMilestoneDTO,
  RemoveMilestoneHistoryDTO,
} from "./milestone.dtos";

export interface IMilestoneRepository {
  findById(data: Milestone["id"]): Promise<Milestone | null>;
  create(data: AddMilestoneDTO): Promise<Milestone["id"] | null>;
  update(data: Milestone): Promise<void>;
  delete(data: RemoveMilestoneDTO): Promise<void>;
  list(data: FetchMilestoneHistoryDTO): Promise<Milestone[]>;
  deleteAll(data: RemoveMilestoneHistoryDTO): Promise<void>;
}
