"use server";

import { URLS } from "@/ui/_config/urls";
import { redirect } from "next/navigation";

type AddMilestoneInput = {
  personId: string;
  description: string;
};

export async function addMilestone(data: AddMilestoneInput) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("ok", data.personId);
  redirect(URLS.details(data.personId));
}
