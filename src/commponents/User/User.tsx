import React, { useState } from "react";
import { UserProps } from "./User.types";
import {
  Button,
  Typography,
  Dialog,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import "../../providers/LocalesProvider/i18next";
import { useTranslation } from "react-i18next";

const User: React.FC<UserProps> = ({ name, email, phone, picture, nat }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
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
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        PaperProps={{ sx: { border: "solid" } }}
      >
        <Avatar
          alt={name.first}
          src={picture.large}
          variant="square"
          sx={{ width: 300, height: 300, margin: "0 auto", pt: 2 }}
        />
        <Typography align="center" variant="h4">
          {name.title} {name.first} {name.last}
        </Typography>
        <Typography align="center" variant="h6">
          {t("phone")}: {phone}
        </Typography>
        <Typography align="center" variant="h6">
          {t("email")}: {email}
        </Typography>
        <Typography align="center" variant="h6">
          {t("nationality")}: {nat}
        </Typography>
      </Dialog>
    </>
  );
};

export default User;
