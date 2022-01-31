import { ThunkAction } from "redux-thunk";
import { UserResults, UserInfo } from "../../api/user.types";
import { Statuses } from "../types";

export interface State {
  readonly userRequestStatus: Statuses;
  readonly pageRequestStatus: Statuses;
  readonly resultsRequestStatus: Statuses;
  readonly user: UserResults[];
  readonly page: UserInfo | number ;
  readonly results: UserInfo | number;
}

export const SET_RESULTS_REQUEST_STATUS_PENDING =
  "SET_RESULTS_REQUEST_STATUS_PENDING";

export type SetResultsRequestStatusPendingAction = {
  type: typeof SET_RESULTS_REQUEST_STATUS_PENDING;
};

export type SetResultsRequestStatusPendingActionCreator =
  () => SetResultsRequestStatusPendingAction;

export const SET_RESULTS_REQUEST_STATUS_FAILURE =
  "SET_RESULTS_REQUEST_STATUS_FAILURE";

export type SetResultsRequestStatusFailureAction = {
  type: typeof SET_RESULTS_REQUEST_STATUS_FAILURE;
};

export type SetResultsRequestStatusFailureActionCreator =
  () => SetResultsRequestStatusFailureAction;

export const SET_RESULTS = "SET_RESULTS";

export type SetResultsRequestSuccessAction = {
  type: typeof SET_RESULTS;
  payload: UserInfo;
};

export type SetResultsRequestSuccessActionCreator = (
  results: UserInfo
) => SetResultsRequestSuccessAction;

export const SET_PAGE_REQUEST_STATUS_PENDING =
  "SET_PAGE_REQUEST_STATUS_PENDING";

export type SetPageRequestStatusPendingAction = {
  type: typeof SET_PAGE_REQUEST_STATUS_PENDING;
};

export type SetPageRequestStatusPendingActionCreator =
  () => SetPageRequestStatusPendingAction;

export const SET_PAGE_REQUEST_STATUS_FAILURE =
  "SET_PAGE_REQUEST_STATUS_FAILURE";

export type SetPageRequestStatusFailureAction = {
  type: typeof SET_PAGE_REQUEST_STATUS_FAILURE;
};

export type SetPageRequestStatusFailureActionCreator =
  () => SetPageRequestStatusFailureAction;

export const SET_PAGE = "SET_PAGE";

export type SetPageRequestSuccessAction = {
  type: typeof SET_PAGE;
  payload: UserInfo;
};

export type SetPageRequestSuccessActionCreator = (
  pages: UserInfo
) => SetPageRequestSuccessAction;

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
  | SetPageRequestStatusFailureAction
  | SetPageRequestStatusPendingAction
  | SetPageRequestSuccessAction
  | SetResultsRequestStatusFailureAction
  | SetResultsRequestStatusPendingAction
  | SetResultsRequestSuccessAction;

export type GetUserThunk = () => ThunkAction<void, State, number, Actions>;
export type GetPageThunk = (
  page: number,
  results: number
) => ThunkAction<void, State, number, Actions>;
