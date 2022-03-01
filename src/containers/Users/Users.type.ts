import { User  } from "../../api/user.types";

export interface UsersProps extends User {}

export interface UsersPropsProduct {
    gender: string;
    results: string;
    page: number;
    nat: string;
  }


