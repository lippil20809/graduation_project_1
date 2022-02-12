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
} from "@mui/material";
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
  const [page, setPage] = useState(1);
  const [results, setResults] = useState("");
  const [nat, setNat] = useState("");
  const [gender, setGender] = useState("female");
  const { toggleColorMode } = useModes();
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
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
    dispatch(getUser(page,results,nat,gender));
  }, [dispatch,page,results,nat,gender]);
  return (
    <>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box>
        <HeaderContainer>
          <FormControl
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              {t("genders")}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={handleChangeGender}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Femal"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>
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
            height:38
            
          }}

          >
            <Button onClick={() => changleLanguage("en")} type="button"  color='inherit'>
              EN
            </Button>
            <Button onClick={() => changleLanguage("ru")} type="button" color='inherit'>
              RU
            </Button>
          </ButtonGroup>
          <Button
            sx={{
              
              color:'inherit',
              borderRadius: 1,
              minWidth: 150,
              border:1
 
            }}
            onClick={toggleColorMode}
            type="button"
          >
            {t("changeTheme")}
          </Button>
        </HeaderContainer>
    <UsersContainer>
      {userRequestStatus === Statuses.PENDING && "loading..."}
      {userRequestStatus === Statuses.FAILURE && "some error..."}
      {user?.map (user => (
         <User key={user.login.uuid}{...user}/>
      ))}
    </UsersContainer>
    </Box>
      </Container>
    </>
  );
};

export default Users;
