import React from "react";
import styled from "styled-components";

function Member(props) {
  return (
    <>
      <Profile>
        <Picture />
        <Name>{props.name}</Name>
        <Field>{props.field}</Field>
        <Email>{props.email}</Email>
      </Profile>
    </>
  );
}

const Profile = styled.div`
  width: 200px;
  height: 300px;
`;

const Picture = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 100px;
`;

const Name = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Field = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Email = styled.p`
  margin: 0;
  font-size: 15px;
  color: #9b9b9b;
`;

export default Member;
