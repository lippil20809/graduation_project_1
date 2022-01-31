import * as apiUsers from '../../api/user'
import * as userTypes from '../user/user.types'

export const SetResultsRequestStatusPending:userTypes.SetResultsRequestStatusPendingActionCreator = () => ({
    type: userTypes.SET_RESULTS_REQUEST_STATUS_PENDING
})
export const SetResultsRequestStatusFailure: userTypes.SetResultsRequestStatusFailureActionCreator = () => ({
    type: userTypes.SET_RESULTS_REQUEST_STATUS_FAILURE
})

export const SetResultsRequestSuccess: userTypes.SetResultsRequestSuccessActionCreator = (results) => ({
    type: userTypes.SET_RESULTS,
    payload: results

})

export const SetPageRequestStatusPending:userTypes.SetPageRequestStatusPendingActionCreator = () => ({
    type: userTypes.SET_PAGE_REQUEST_STATUS_PENDING
})

export const SetPageRequestStatusFailure:userTypes.SetPageRequestStatusFailureActionCreator = () => ({
    type: userTypes.SET_PAGE_REQUEST_STATUS_FAILURE
})

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

export const SetPageRequestSuccess:userTypes.SetPageRequestSuccessActionCreator = (page) => ({
    type: userTypes.SET_PAGE,
    payload: page
})

export const getUsers: userTypes.GetPageThunk = (page,results) => {
    return(dispatch) => {
        dispatch(SetPageRequestStatusPending())
        apiUsers
        .getUsers(page,results)
        .then((res) => dispatch(SetPageRequestSuccess(res.info)))
        .catch(() => dispatch(SetUserRequestStatusFailure()))
    }
   

}

export const getUser: userTypes.GetUserThunk = () => {
    return(dispatch) => {
        dispatch(SetUserRequestStatusPending())
    apiUsers
        .getUser()
        .then((res) => dispatch(SetUsersRequestSuccess(res.results)))
       
        .catch(() => dispatch(SetUserRequestStatusFailure()))
    }
}