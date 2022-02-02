import {User,UserInfo} from '../api/user.types'

export interface UsersProps extends User {
}

export interface UsersLoading {
    loading: boolean
}

export interface UsersError {
    error: boolean
}

export interface UserInfoProps extends UserInfo {
    
}

