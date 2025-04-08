import { validateSchemaData } from "@/core/_utils/validateSchemaData";

import { AddMilestoneSchema } from "./schemas/add-milestone.schema";
import { FetchMilestoneHistorySchema } from "./schemas/fetch-milestone-history.schema";
import { MilestoneInstanceSchema } from "./schemas/milestone-instance.schema";
import { RemoveMilestoneSchema } from "./schemas/remove-milestone.schema";

export const validateAddMilestone = validateSchemaData(AddMilestoneSchema);
export const validateFetchMilestoneHistory = validateSchemaData(FetchMilestoneHistorySchema);
export const validateMilestoneInstance = validateSchemaData(MilestoneInstanceSchema);
export const validateRemoveMilestone = validateSchemaData(RemoveMilestoneSchema);

export const milestoneValidators = {
  add: validateAddMilestone,
  fetchHistory: validateFetchMilestoneHistory,
  remove: validateRemoveMilestone,
};
