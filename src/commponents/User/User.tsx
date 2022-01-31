import React from "react";

import styled from 'styled-components'
import { UserProps } from "../User/User.types";

const UserContainer = styled("div")`
  flex: 0 0 calc(100% / 4 - 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  padding: 8px;
  border: 1.5px solid grey;
  border-radius: 8px;
  box-sizing: border-box;
  > h6 {
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 12px;
  }
  > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    > li {
     font-size: 16px;
    }
  }
`;

const User: React.FC<UserProps> = ({
  name,
  location,
  email,
  phone,
  picture,
}) => {
  return (
    <UserContainer>
        <img width="100px" height="100px" alt={name.first} src={picture.medium} />
      <h6>
        {name.title} {name.first} {name.last}
      </h6>
      <ul>
        {/* <li>
          location:  {location.city}, {location.street}
        </li> */}
        <li>phone: {phone}</li>
        <li>email: {email}</li>
      </ul>
    </UserContainer>
  );
};

export default User;
