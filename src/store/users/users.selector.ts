import {State as UsersState} from './users.types'
import {RootState} from "../types"

export const getSlise = (state:RootState):UsersState => state.users