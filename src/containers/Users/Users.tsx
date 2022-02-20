import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import User from "../../commponents/User";
import { getUser, getSlise } from "../../store/user";
import { Statuses } from "../../store/types";
import {
  Pagination,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Select,
  SelectChangeEvent,
  CssBaseline,
  Container,
  ButtonGroup,
  LinearProgress,
  Alert,
} from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useModes } from "../../providers/ThemeProvider/theme";

import "../../providers/LocalesProvider/i18next";
import { useTranslation } from "react-i18next";

const UsersContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 16px auto;
`;

const HeaderContainer = styled("div")`
  display: flex;
  max-width: 1200px;
  width: 100%;
  justify-content: space-evenly;
  flex: 0 0 calc(100% / 4 - 16px);
  align-items: center;
  margin: 8px auto;
  padding: 8px;
  border: 1.5px solid grey;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { user, userRequestStatus } = useSelector(getSlise);
  const [page, setPage] = useState(
    (Number(localStorage.getItem("page")) || 1) as number
  );
  const [results, setResults] = useState(localStorage.getItem("results") ?? "");
  const [nat, setNat] = useState(localStorage.getItem("nat") ?? "");
  const { toggleColorMode } = useModes();
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [gender, setAlignment] = React.useState<string>(
    localStorage.getItem("gender") ?? "female"
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  const handleChangePage = (event: any, value: React.SetStateAction<number>) =>
    setPage(value);

  const handleChangeResults = (event: SelectChangeEvent) => {
    setResults(event.target.value as string);
  };

  const handleChangeNat = (event: SelectChangeEvent) => {
    setNat(event.target.value as string);
  };

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
    localStorage.setItem("results", results);
    localStorage.setItem("nat", nat);
    localStorage.setItem("gender", gender);
    dispatch(getUser(page, results, nat, gender));
  }, [dispatch, page, results, nat, gender]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          <HeaderContainer>
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="female" aria-label="left aligned">
                <FemaleIcon />
              </ToggleButton>
              <ToggleButton value="male" aria-label="centered">
                <MaleIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <Pagination count={10} page={page} onChange={handleChangePage} />
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {t("results")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={results}
                  label="Results"
                  onChange={handleChangeResults}
                >
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={32}>32</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 170 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {t("nationality")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nat}
                  label="Nat"
                  onChange={handleChangeNat}
                >
                  <MenuItem value={"AU"}>AU</MenuItem>
                  <MenuItem value={"BR"}>BR</MenuItem>
                  <MenuItem value={"CA"}>CA</MenuItem>
                  <MenuItem value={"CH"}>CH</MenuItem>
                  <MenuItem value={"DE"}>DE</MenuItem>
                  <MenuItem value={"DK"}>DK</MenuItem>
                  <MenuItem value={"ES"}>ES</MenuItem>
                  <MenuItem value={"FI"}>FI</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <ButtonGroup
              sx={{
                height: 38,
              }}
            >
              <Button
                onClick={() => changleLanguage("en")}
                type="button"
                color="inherit"
              >
                EN
              </Button>
              <Button
                onClick={() => changleLanguage("ru")}
                type="button"
                color="inherit"
              >
                RU
              </Button>
            </ButtonGroup>
            <Button
              sx={{
                color: "inherit",
                borderRadius: 1,
                minWidth: 150,
                border: 1,
              }}
              onClick={toggleColorMode}
              type="button"
            >
              {t("changeTheme")}
            </Button>
          </HeaderContainer>
          <UsersContainer>
            {userRequestStatus === Statuses.PENDING && <LinearProgress />}
            {userRequestStatus === Statuses.FAILURE && (
              <Alert severity="error">{t("error")}</Alert>
            )}
            {user?.map((user) => (
              <User key={user.login.uuid} {...user} />
            ))}
          </UsersContainer>
        </Box>
      </Container>
    </>
  );
};

export default Users;
