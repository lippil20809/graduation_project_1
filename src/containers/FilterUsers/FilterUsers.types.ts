import {UserInfo} from 'api/user.types'

export interface FilterUsersProps extends UserInfo {

    onChange: ( value: number, event?: React.ChangeEvent<unknown>) => void;
}