
import React,{useEffect} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../components/User";
import {getUsers,getSlise} from '../store/users'
import {Statuses} from 'store/types'


const UsersContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 16px auto;
`;

const Users: React.FC = () => {
  const params = useParams<{page?:string,results?:string}>()
  const dispatch = useDispatch();
  const { users, usersRequestStatus } = useSelector(getSlise);

  useEffect(() =>{
    if(params.page && params.results){
      dispatch(getUsers(Number(params.page),Number((params.results))))
    }
    
  },[dispatch,params.page,params.results])


  

  return (
    <UsersContainer>
      {usersRequestStatus === Statuses.PENDING && "loading..."}
      {usersRequestStatus === Statuses.FAILURE && "some error..."}
      {users?.map((user)=>(
         <User key={user.results.login.uuid}{...user}/>
      ))}
    
      
    </UsersContainer>
  );
};

export default Users;
