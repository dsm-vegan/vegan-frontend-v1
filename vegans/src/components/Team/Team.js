import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/Users/cho1111/vegans/src/image/Logo.png';
import Banner from './Banner';
import TeamIntroduce from './TeamIntroduce';

export default function Team() {
    return (
        <div>
            <Header>
                <Link to="/">
                    <img src={logo} style={{
                        position: 'fixed',
                        top: '50px',
                        left: '100px'
                    }} />
                </Link>
            </Header>
            <Banner />
            <Introduce>팀 소개</Introduce>
            <Underbar />
            <TeamIntroduce n 
            name1="조우상"
            major1="Frontend"
            major2="Design"
            email1="woosang3078@gmail.com"
            name2="황진성"
            major3="Frontend"
            major4="Design"
            email2="imhjs2023@gmail.com"
            name3="김진건"
            major5="Frontend"
            email3="jingeon27@gmail.com"
            name4="박휘응"
            major6="Backend"
            email4="whee050916@gmail.com"
            />
        </div>
    )
}

const Header = styled.header`
  width: 100%;
  height: 150px;
`;

const Introduce = styled.h2`
  margin-left: 50px;
  margin-top: 30px;
  font-size: 25px;
`;

const Underbar = styled.div`
  width: 77px;
  height: 6px;
  background-color: #3BD883;
  margin-left: 48px;
  margin-top: -18px;
`