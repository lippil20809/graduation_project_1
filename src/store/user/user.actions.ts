import * as apiUsers from '../../api/user'
import * as userTypes from '../user/user.types'


export const SetUserRequestStatusPending:userTypes.SetUserRequestStatusPendingActionCreator = () => ({
    type: userTypes.SET_USER_REQUEST_STATUS_PENDING
})

export const SetUserRequestStatusFailure:userTypes.SetUserRequestStatusFailureActionCreator = () => ({
    type: userTypes.SET_USER_REQUEST_STATUS_FAILURE
})

export const SetUsersRequestSuccess:userTypes.SetUserRequestSuccessActionCreator = (user) => ({
    type: userTypes.SET_USER,
    payload: user
})

export const getUser: userTypes.GetUserThunk = (page,results,nat,gender) => {
    return(dispatch) => {
        dispatch(SetUserRequestStatusPending())
    apiUsers
        .getUser(page,results,nat,gender)
        .then((res) => dispatch(SetUsersRequestSuccess(res.results)))
       
        .catch(() => dispatch(SetUserRequestStatusFailure()))
    }
}