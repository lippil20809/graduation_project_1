import { ThunkAction } from "redux-thunk";
import { User } from "../../api/user.types";
import { Statuses } from "../types";

export interface State {
  readonly userRequestStatus: Statuses;
  readonly user: User[];
}

export const SET_USER_REQUEST_STATUS_PENDING =
  "SET_USER_REQUEST_STATUS_PENDING";

export type SetUserRequestStatusPendingAction = {
  type: typeof SET_USER_REQUEST_STATUS_PENDING;
};

export type SetUserRequestStatusPendingActionCreator =
  () => SetUserRequestStatusPendingAction;

export const SET_USER_REQUEST_STATUS_FAILURE =
  "SET_USER_REQUEST_STATUS_FAILURE";

export type SetUserRequestStatusFailureAction = {
  type: typeof SET_USER_REQUEST_STATUS_FAILURE;
};

export type SetUserRequestStatusFailureActionCreator =
  () => SetUserRequestStatusFailureAction;

export const SET_USER = "SET_USER";

export type SetUserRequestSuccessAction = {
  type: typeof SET_USER;
  payload: User[];
};

export type SetUserRequestSuccessActionCreator = (
  users: User[]
) => SetUserRequestSuccessAction;

export type Actions =
  | SetUserRequestSuccessAction
  | SetUserRequestStatusFailureAction
  | SetUserRequestStatusPendingAction;

export type GetUserThunk = () => ThunkAction<void, State, number, Actions>;