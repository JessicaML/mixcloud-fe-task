import React from "react";
import styled from "styled-components";
import classNames from 'classnames';
import live from "./assets/live.svg";
import close from "./assets/close.svg";
import "./App.css";

const Container = styled.div`
  display: flex;
  align-items: center;  
  width: 350px;
  height: 60px;
  font-family: 'DM Sans', sans-serif;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 3px 6px rgba(0, 0, 0, 0.2);
  padding: 4px;
  margin: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  margin: 4px;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  margin: 4px;
  border-radius: 50%;
`;

const Logo = styled.img`
  margin: 8px;
`;

const Close = styled.img`
  margin: 4px;
`;

const Name = styled.div`
  font-size: 15.75px;
  color: #1E2337;
  flex-wrap: no-wrap;
  overflow: ellipsis;
`;

const Text = styled.div`
  font-size: 12.25px;
  color: #636674;
`;


function Notification({ follower, onClick, fadeOut }) {
  return (
    <Container className={classNames(fadeOut || 'fadeIn')}>

        <ProfileImage src={follower.pictures.thumbnail} alt={follower.pictures.thumbnail}/>
        <TextWrapper>
          <Name>{follower.name}</Name>
          <Text>is following you</Text>
        </TextWrapper>
        <Logo src={live} alt={live}/>
        <Close src={close} alt={close} onClick={() => onClick(follower)} />

    </Container>
  );
}

export default Notification;
