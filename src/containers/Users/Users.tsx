import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../../commponents/User";
import { getUser, getSlise } from "../../store/user";
import { Statuses } from "../../store/types";
import FilterUsers from '../FilterUsers/FilterUsers'
const UsersContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 16px auto;
`;

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { user, userRequestStatus } = useSelector(getSlise);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <UsersContainer>
      
      {userRequestStatus === Statuses.PENDING && "loading..."}
      {userRequestStatus === Statuses.FAILURE && "some error..."}
      {user?.map (user => (
         <User key={user.login.uuid}{...user}/>
      ))}
      <FilterUsers/>

    </UsersContainer>
  );
};

export default Users;
