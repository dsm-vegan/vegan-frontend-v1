import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '/Users/cho1111/vegans/src/image/Logo.png';
import SearchButton from '../Button/SearchButton';
import Title from './Title';
import { Link } from 'react-router-dom';
import LoginButton from '../login/LoginButton';

export default function MainPage() {

  return (
    <Background>
      <Header>
        <Logo src={logo} />
        <SearchButton />
      </Header>
      <Title title="채식주의" sectitle="당신의 지식을 공유해보세요." />
      <MoveButton>
        <Link to="/" style={{ 
          color: 'white',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '22px'
         }} >
          둘러보기
        </Link>
      </MoveButton>
      <LoginButton login="로그인" />
    </Background>
  )
}


const MoveButton = styled.button`
  width: 140px;
  height: 53px;
  background-color: #A9F5A9;
  border: none;
  border-radius: 30px;
  position: fixed;
  top: 530px;
  left: 297px;
  &:hover {
    opacity: 0.8;
  }
`

const Logo = styled.img`
  position: absolute;
  top: 50px;
  left: 200px;
  position: fixed;
  image-rendering: -webkit-optimize-contrast !important;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  height: 150px;
  width: 100vw;
`