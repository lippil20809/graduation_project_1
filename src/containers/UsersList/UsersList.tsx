import React from "react";
import Filter from "../Filter";
import Users from "../Users";
import { CssBaseline, Container } from "@mui/material";

const UsersList: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Filter />
        <Users />
      </Container>
    </>
  );
};

export default UsersList;
