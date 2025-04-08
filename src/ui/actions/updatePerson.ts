"use server";

type UpdatePersonParams = {
  id: string;
  firstname?: string;
  lastname?: string;
  nicknames?: string[];
  gender?: string;
  relation?: string;
};

export async function updatePerson(data: UpdatePersonParams) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const firstname = data.firstname || "John";
  const lastname = data.lastname || "Doe";
  const name = `${firstname} ${lastname}`;

  return {
    success: true,
    data: {
      id: data.id,
      name,
      firstname,
      lastname,
      nicknames: data.nicknames || [],
      gender: data.gender || "",
      relation: data.relation || "",
    },
  };
}
