import React from 'react';
import styled from 'styled-components';
import image from '/Users/cho1111/vegans/src/image/backimage.png';
import logo from '/Users/cho1111/vegans/src/image/logo_white.png';
import { Link } from 'react-router-dom';

export default function SearchMain() {
    return (
        <Background>
            <img src={image} style={{
                width: '100%',
                height: '100vh'
            }} />
            <Header>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </Header>
        </Background>
    )
}

const Header = styled.header`
  width: 100vw;
  height: px;
  position: fixed;
  top: -100px;
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;