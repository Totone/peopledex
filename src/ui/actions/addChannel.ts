"use server";

type AddChannelPayload = {
  personId: string;
  type: "phone" | "email" | "social";
  label: string;
  value: string;
};

export async function addChannel(payload: AddChannelPayload) {
  await diContainer.usecases.addChannel(payload);
}
