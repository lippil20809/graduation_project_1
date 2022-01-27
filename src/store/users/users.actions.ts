import * as apiUsers from 'api/users'
import * as userTypes from './users.types'

export const SetUsersRequestStatusPending:userTypes.SetUsersRequestStatusPendingActionCreator = () => ({
    type: userTypes.SET_USERS_REQUEST_STATUS_PENDING
})

export const SetUsersRequestStatusFailure:userTypes.SetUsersRequestStatusFailureActionCreator = () => ({
    type: userTypes.SET_USERS_REQUEST_STATUS_FAILURE
})

export const SetUsersRequestSuccess:userTypes.SetUsersRequestSuccessActionCreator = (user) => ({
    type: userTypes.SET_USERS,
    payload: user
})

export const getUsers: userTypes.GetUserThunk = (page,results) => {
    return(dispatch) => {
        dispatch(SetUsersRequestStatusPending())
    apiUsers
        .getUsers(page,results)
        .then((user) => dispatch(SetUsersRequestSuccess(user)))
        .catch(() => dispatch(SetUsersRequestStatusFailure()))
    }
}