import React from "react";
import styled from "styled-components";
import live from "./assets/live.svg";
import close from "./assets/close.svg";
import "./App.css";

const Container = styled.div`
  display: flex;
  align-items: center;  
  width: 350px;
  height: 60px;
  font-family: 'DM Sans', sans-serif;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const Logo = styled.img`
`;

const Close = styled.img`
`;

const Name = styled.div`
  font-size: 15.75px;
  color: #1E2337;
`;

const Text = styled.div`
  font-size: 12.25px;
  color: #636674;
`;


function Notification({ follower }) {
  return (
    <Container>
        <ProfileImage src={follower.pictures.thumbnail} alt={follower.pictures.thumbnail}/>
        <TextWrapper>
          <Name>{follower.name}</Name>
          <Text>is following you</Text>
        </TextWrapper>
        <Logo src={live} alt={live}/>
        <Close src={close} alt={close}/>
    </Container>
  );
}

export default Notification;
