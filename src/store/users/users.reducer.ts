import * as userTypes from './users.types'

import { Statuses } from 'store/types'

export const initialState: userTypes.State = {
     usersRequestStatus: Statuses.UNCALLED,
     users: [],
}

export const usersReducer = (
    state: userTypes.State = initialState,
    action: userTypes.Actions
):userTypes.State => {
    switch (action.type){
        case userTypes.SET_USERS_REQUEST_STATUS_PENDING:
            return {...state,usersRequestStatus:Statuses.PENDING};
        case userTypes.SET_USERS_REQUEST_STATUS_FAILURE:
            return{...state,usersRequestStatus:Statuses.FAILURE};
        case userTypes.SET_USERS:
            return{
                ...state,
                users: action.payload,
                usersRequestStatus:Statuses.SUCCESS
            }    
    }
}