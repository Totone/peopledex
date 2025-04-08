"use server";

export const removePerson = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(id);

  return {
    success: true,
  };
};
