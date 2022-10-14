import React from 'react';
import styled from 'styled-components';

export default function Banner() {
    return (
        <BannerBox>
            <FirstTitle>Team Vegans 소개</FirstTitle>
            <SecondTitle>
                모든 비건들이 편하게 소통하고 공유할 수 있도록 항상 노력하고 있습니다.
            </SecondTitle>
        </BannerBox>
    )
}

const BannerBox = styled.div`
  width: 100%;
  height: 210px;
  background-color: #3BD883;
`;

const FirstTitle = styled.p`
  font-size: 35px;
  color: white;
  font-weight: 570;
  margin-left: 100px;
  top: 170px;
  position: fixed;
`;

const SecondTitle = styled.p`
  font-size: 20px;
  position: fixed;
  top: 250px;
  left: 100px;
  color: #E9F1ED;
  font-weight: 600;
`