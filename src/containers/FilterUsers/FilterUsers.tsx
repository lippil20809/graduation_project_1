import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  getSlise , getUsers} from "../../store/user";
import { Statuses } from "../../store/types";
import {Pagination} from '@mui/material'
import {FilterUsersProps} from '../FilterUsers/FilterUsers.types'

const FilterUsers: React.FC<FilterUsersProps> = ({onChange}) => {
    const dispatch = useDispatch();
    const params = useParams<{ page?: string, results?: string}>()
    const { page, results } = useSelector(getSlise);

    useEffect(() => {
            dispatch(getUsers(Number(params.page),Number(params.results)))
    },[dispatch,params.page,params.results])

    const handleChange = () => {
        onChange(Number(page))
    }
  

  return (
      <Pagination count={10} page={Number(page)}  onChange={handleChange}/>
  )
  
};

export default FilterUsers ;