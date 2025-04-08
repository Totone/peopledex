"use server";

type AddPersonParams = {
  firstname?: string;
  lastname?: string;
  nicknames?: string[];
  gender?: string;
  relation?: string;
};

export const addPerson = async (data: AddPersonParams) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const firstname = data.firstname || "John";
  const lastname = data.lastname || "Doe";
  const name = `${firstname} ${lastname}`;

  return {
    success: true,
    data: {
      id: `person-${Date.now()}`,
      name,
      firstname,
      lastname,
      nicknames: data.nicknames || [],
      gender: data.gender || "",
      relation: data.relation || "",
    },
  };
};
