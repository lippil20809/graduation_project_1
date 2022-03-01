import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../../api/user";
import { UsersProps } from "containers/Users/Users.type";
import User from "../../components/User/User";
import {
  Pagination,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  CssBaseline,
  Container,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { useModes } from "../../providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { getByKey, setByKey } from "../../helpers/sessionStorage";

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
  const [users, setUser] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState((Number(getByKey("page")) || 1) as number);
  const [results, setResults] = useState<string>(getByKey("results"));
  const [nat, setNat] = useState<string>(getByKey("nat"));
  const [gender, setGender] = useState<string>(getByKey("gender"));
  const { toggleColorMode } = useModes();
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleGender = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string
  ) => {
    if (newGender) {
      setGender(newGender);
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
    setByKey("page", page);
    setByKey("results", results);
    setByKey("nat", nat);
    setByKey("gender", gender);
    setLoading(true);
    getUser(page, results, nat, gender)
      .then((data) => {
        setUser(data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, [page, results, nat, gender]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          <HeaderContainer>
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
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
            {!loading && "loading..."}
            {error && "some error..."}
            {users?.map((user) => (
              <User key={user.login.uuid} {...user} />
            ))}
          </UsersContainer>
        </Box>
      </Container>
    </>
  );
};

export default Users;
