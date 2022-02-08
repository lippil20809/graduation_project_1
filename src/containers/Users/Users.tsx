import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../../commponents/User";
import { getUser, getSlise } from "../../store/user";
import { Statuses } from "../../store/types";
import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

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
   <HeaderContainer>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={gender}
            onChange={handleChangeGender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <Pagination count={10} onChange={handleChangePage} />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Results</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={results}
              label="Results"
              onChange={handleChangeResults}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Nat</InputLabel>
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
            </Select>
          </FormControl>
        </Box>
        {/* <Button onClick={toggleLang} type="button">
          {trans?.changeLang}
        </Button>
        <Button onClick={toggleTheme} type="button">
          {trans?.changeTheme}
        </Button> */}
      </HeaderContainer>
    <UsersContainer>
      {userRequestStatus === Statuses.PENDING && "loading..."}
      {userRequestStatus === Statuses.FAILURE && "some error..."}
      {user?.map (user => (
         <User key={user.login.uuid}{...user}/>
      ))}
    </UsersContainer>
    </>
  );
};

export default Users;
