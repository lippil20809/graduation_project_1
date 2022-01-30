import {State as UsersState} from './user/user.types'

export enum Statuses {
    PENDING,
    FAILURE,
    SUCCESS,
    UNCALLED,
  }

  export interface RootState {
    readonly user: UsersState;
} 