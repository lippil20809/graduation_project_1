import React, { useState } from "react";

import styled from "styled-components";
import { UserProps } from "./User.types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const UserContainer = styled("div")`
  flex: 0 0 calc(100% / 4 - 16px);
  display: flex;
  flex-direction: column;
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User: React.FC<UserProps> = ({ name, email, phone, picture, nat }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Button onClick={handleOpen}>
     <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name.first} src={picture.large}  />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
            {name.title} {name.first} {name.last}
          </>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                phone: {phone}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Button>
      <Divider variant="inset"  />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            width="100px"
            height="100px"
            alt={name.first}
            src={picture.medium}
          />
          <h6>
            {name.title} {name.first} {name.last}
          </h6>
          <ul>
            <li>phone: {phone}</li>
            <li>email: {email}</li>
            <li>nat: {nat}</li>
          </ul>
        </Box>
      </Modal>
    </>
  );
};

export default User;