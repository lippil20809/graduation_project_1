import { ThunkAction } from "redux-thunk";
import { UserResults } from "../../api/user.types";
import { Statuses } from "../types";

export interface State {
  readonly userRequestStatus: Statuses;
  readonly user: UserResults[];
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
  payload: UserResults[];
};

export type SetUserRequestSuccessActionCreator = (
  users: UserResults[]
) => SetUserRequestSuccessAction;

export type Actions =
  | SetUserRequestSuccessAction
  | SetUserRequestStatusFailureAction
  | SetUserRequestStatusPendingAction
export type GetUserThunk = ( page: number,
  results: number | string, nat:string, gender:string) => ThunkAction<void, State, number, Actions>;

