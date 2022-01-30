import * as userTypes from "./user.types";

import { Statuses } from "../types";

export const initialState: userTypes.State = {
  userRequestStatus: Statuses.UNCALLED,
  user: [],
};

export const userReducer = (
  state: userTypes.State = initialState,
  action: userTypes.Actions
): userTypes.State => {
  switch (action.type) {
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
