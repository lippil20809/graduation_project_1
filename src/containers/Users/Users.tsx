import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import User from "../../components/User";
import { getSlise } from "../../store/user";
import { Statuses } from "../../store/types";
import {
  LinearProgress,
  Alert,
} from "@mui/material";
import "../../locales/i18next";
import { useTranslation } from "react-i18next";

const UsersContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 16px auto;
`;

const Users: React.FC = () => {
  const { user, userRequestStatus } = useSelector(getSlise);
  const { t } = useTranslation();
  return (
    <>
        <UsersContainer>
          {userRequestStatus === Statuses.PENDING && <LinearProgress />}
          {userRequestStatus === Statuses.FAILURE && (
            <Alert severity="error">{t("error")}</Alert>
          )}
          {user?.map((user) => (
            <User key={user.login.uuid} {...user} />
          ))}
        </UsersContainer>
    </>
  );
};

export default Users;
