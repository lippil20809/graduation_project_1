import React, { useState } from "react";
import styled from "styled-components";
import { UserProps } from "./User.types";
import {
  Box,
  Button,
  Typography,
  Modal,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import "../../providers/LocalesProvider/i18next";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  return (
    <>
      <Button onClick={handleOpen}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={name.first} src={picture.large} />
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
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {t("phone")}: {phone}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </Button>
      <Divider variant="inset" />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            width="100px"
            height="100px"
            alt={name.first}
            src={picture.thumbnail}
          />
          <h6>
            {name.title} {name.first} {name.last}
          </h6>
          <ul>
            <li>
              {t("phone")}: {phone}
            </li>
            <li>
              {t("email")}: {email}
            </li>
            <li>
              {t("nationality")}: {nat}
            </li>
          </ul>
        </Box>
      </Modal>
    </>
  );
};

export default User;
