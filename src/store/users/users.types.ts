import { ThunkAction } from "redux-thunk";
import { UsersTypes } from "api/users.types";
import { Statuses } from "../types";

export interface State {
  readonly usersRequestStatus: Statuses;
  readonly users: UsersTypes [];
}

export const SET_USERS_REQUEST_STATUS_PENDING =
  "SET_USERS_REQUEST_STATUS_PENDING";

export type SetUsersRequestStatusPendingAction = {
  type: typeof SET_USERS_REQUEST_STATUS_PENDING;
};

export type SetUsersRequestStatusPendingActionCreator =
  () => SetUsersRequestStatusPendingAction;

export const SET_USERS_REQUEST_STATUS_FAILURE =
  "SET_USERS_REQUEST_STATUS_FAILURE";

export type SetUsersRequestStatusFailureAction = {
  type: typeof SET_USERS_REQUEST_STATUS_FAILURE;
};

export type SetUsersRequestStatusFailureActionCreator =
  () => SetUsersRequestStatusFailureAction;

export const SET_USERS = "SET_USERS";

export type SetUsersRequestSuccessAction = {
  type: typeof SET_USERS;
  payload: UsersTypes [] ;
};

export type SetUsersRequestSuccessActionCreator = (
  users: UsersTypes []
) => SetUsersRequestSuccessAction;

export type Actions =
  | SetUsersRequestSuccessAction
  | SetUsersRequestStatusFailureAction
  | SetUsersRequestStatusPendingAction;

export type GetUserThunk = (
  results: number,
  page: number
) => ThunkAction<void, State, number, Actions>;
