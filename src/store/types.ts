import {State as UsersState} from './users/users.types'

export enum Statuses {
    PENDING,
    FAILURE,
    SUCCESS,
    UNCALLED,
  }

  export interface RootState {
      readonly users: UsersState;
  }