import styled from 'styled-components';
import React from 'react';

export default function Title(props) {
    return (
        <>
          <FirstTitle>{props.title}</FirstTitle>
          <SecondTitle>{props.sectitle}</SecondTitle>
        </>
    )
}

const FirstTitle = styled.p`
  font-size: 50px;
  position: fixed;
  top: 350px;
  left: 300px;
  font-weight: 650;
`

const SecondTitle = styled.p`
  font-size: 30px;
  position: fixed;
  font-weight: 650;
  top: 440px;
  left: 300px;
`