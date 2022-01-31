import * as userTypes from "./user.types";

import { Statuses } from "../types";

export const initialState: userTypes.State = {
  userRequestStatus: Statuses.UNCALLED,
  pageRequestStatus: Statuses.UNCALLED,
  resultsRequestStatus: Statuses.UNCALLED,
  results: Number(),
  page: Number(),
  user: [],
};

export const userReducer = (
  state: userTypes.State = initialState,
  action: userTypes.Actions
): userTypes.State => {
  switch (action.type) {
    case userTypes.SET_RESULTS_REQUEST_STATUS_PENDING:
      return { ...state, resultsRequestStatus: Statuses.PENDING };
    case userTypes.SET_RESULTS_REQUEST_STATUS_FAILURE:
      return { ...state, resultsRequestStatus: Statuses.FAILURE };
    case userTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload,
        resultsRequestStatus: Statuses.SUCCESS,
      };
    case userTypes.SET_PAGE_REQUEST_STATUS_PENDING:
      return { ...state, pageRequestStatus: Statuses.PENDING };
    case userTypes.SET_PAGE_REQUEST_STATUS_FAILURE:
      return { ...state, pageRequestStatus: Statuses.FAILURE };
    case userTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
        pageRequestStatus: Statuses.SUCCESS,
      };
    case userTypes.SET_USER_REQUEST_STATUS_PENDING:
      return { ...state, userRequestStatus: Statuses.PENDING };
    case userTypes.SET_USER_REQUEST_STATUS_FAILURE:
      return { ...state, userRequestStatus: Statuses.FAILURE };
    case userTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        userRequestStatus: Statuses.SUCCESS,
      };
    default:
      return state;
  }
};
