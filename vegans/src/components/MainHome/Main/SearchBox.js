import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainPage from './Main';

export default function SearchBox() {
    return (
        <SearchContainer>
            <BoxSearch placeholder="검색어를 입력하세요." />
        </SearchContainer>
    )
}


const SearchContainer = styled.div`
   width: 950px;
   height: 100px;
`;

const BoxSearch = styled.input`
  width: 830px;
  height: 40px;
  position: fixed;
  left: 440px;
  top: 66px;
  border-radius: 20px;
  border: 1px solid #eeeeee;
  padding-left: 15px;
  font-size: 15px; 
`;