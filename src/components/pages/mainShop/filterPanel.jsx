import React from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import {
  FormControl,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Select,
} from '@mui/material';

export const FilterPanel = () => {
  return (
    <FilterPanelContainer>
      <FilterTitle>Filter</FilterTitle>
      <FormContainer>
        <SelectLabel>Gender</SelectLabel>
        <FilterSelect>
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
        </FilterSelect>

        <SelectLabel>Sub Category</SelectLabel>
        <FilterSelect>
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
        </FilterSelect>
        <SelectLabel>Color</SelectLabel>
        <FilterSelect>
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
        </FilterSelect>
        <SelectLabel>Price</SelectLabel>
        <FilterSelect>
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
        </FilterSelect>
      </FormContainer>
    </FilterPanelContainer>
  );
};

const FilterPanelContainer = styled.div`
  padding-top: 6rem;
`;

const FilterSelect = styled(Select)`
  width: 100%;
  text-align: left;
  color: red;
  margin-bottom: 1rem;
`;

const FilterTitle = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
`;

const SelectLabel = styled(FormLabel)`
  bottom: 0px;
  position: absolute;
  fontsize: 0.75em;
`;

const FormContainer = styled.div`
  width: 100%;
  text-align: left;
`;
