import { Milestone } from "@/core/milestone/milestone.entity";
import {
  AddMilestoneDTO,
  FetchMilestoneHistoryDTO,
  RemoveMilestoneDTO,
  RemoveMilestoneHistoryDTO,
} from "@/core/milestone/milestone.dtos";
import { IMilestoneRepository } from "@/core/milestone/milestone.repository";
import { milestones } from "./db/milestones";

export class MilestoneRepositoryFakeDB implements IMilestoneRepository {
  async findById(data: Milestone["id"]): Promise<Milestone | null> {
    return milestones.find((milestone) => milestone.id === data) || null;
  }

  async list(data: FetchMilestoneHistoryDTO): Promise<Milestone[]> {
    return milestones.filter((milestone) => milestone.personId === data.personId);
  }

  async create(data: AddMilestoneDTO): Promise<Milestone["id"] | null> {
    const milestone: Milestone = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    milestones.push(milestone);
    return milestone.id;
  }

  async update(data: Milestone): Promise<void> {
    const index = milestones.findIndex((milestone) => milestone.id === data.id);
    if (index === -1) {
      throw new Error("Milestone not found");
    }
    milestones[index] = {
      ...milestones[index],
      ...data,
    };
  }

  async delete(data: RemoveMilestoneDTO): Promise<void> {
    const index = milestones.findIndex((milestone) => milestone.id === data.id);
    if (index === -1) {
      throw new Error("Milestone not found");
    }
    milestones.splice(index, 1);
  }

  async deleteAll(data: RemoveMilestoneHistoryDTO): Promise<void> {
    const personMilestones = milestones.filter((milestone) => milestone.personId === data.personId);
    personMilestones.forEach((milestone) => {
      const index = milestones.findIndex((m) => m.id === milestone.id);
      if (index !== -1) {
        milestones.splice(index, 1);
      }
    });
  }
}
