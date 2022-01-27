import axios from 'axios'

import {UsersTypes} from './users.types'

export const getUsers = async (page:number,results:number) => {
    const { data } = await axios.get<UsersTypes[]>(
        `https://randomuser.me/api/?page=${page}&results=${results}&seeds=abc`
    );
  
    return data;
  };
