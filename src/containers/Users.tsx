import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../api/user";
import { UsersProps } from "./Users.type";
import User from "../commponents/User";
import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
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
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 16px auto;
`;

const Users: React.FC = () => {
  const [users, setUser] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
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
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={gender}
          onChange={handleChangeGender}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
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
      <UsersContainer>
        {!loading && "loading..."}
        {error && "some error..."}
        {users?.map((user) => (
         
          <User key={user.login.uuid} {...user} />
         
        ))}
      </UsersContainer>
    </>
  );
};

export default Users;
