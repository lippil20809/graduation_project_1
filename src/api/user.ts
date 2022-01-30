import axios from "axios";

import { UsersResponse } from "./user.types";

export const getUser = async () => {
  const { data } = await axios.get<UsersResponse>(
    `https://randomuser.me/api/?results`
  );

  return data;
};

// export const getUsers = async (page: number, results: number) => {
//     const { data } = await axios.get<UsersResponse>(
//       `https://randomuser.me/api/?page=${page}&results=${results}&seeds=abc`
//     );
  
//     return data;
//   };