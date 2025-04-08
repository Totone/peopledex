"use server";

export const removeMilestone = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(id);
  return {
    success: true,
  };
};
