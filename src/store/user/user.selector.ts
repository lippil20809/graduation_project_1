import { State as UsersState } from "./user.types";
import { RootState } from "../types";

export const getSlise = (state: RootState): UsersState => state.user;
