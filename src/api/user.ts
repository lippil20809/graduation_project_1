import axios from "axios";

import { UsersResponse } from "./user.types";

export const getUser = async (
  page: number,
  results: number | string,
  nat: string,
  gender: string
) => {
  const { data } = await axios.get<UsersResponse>(
    `https://randomuser.me/api/?page=${page}&results=${results}&nat=${nat}&gender=${gender}`
  );

  return data;
};
