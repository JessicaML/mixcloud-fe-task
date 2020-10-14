import React from "react";
import styled from "styled-components";
import classNames from 'classnames';
import live from "./assets/live.svg";
import close from "./assets/close.svg";
import Theme from "./Theme";
import "./App.css";

const Container = styled.div`
  display: flex;
  align-items: center;  
  width: 350px;
  height: 60px;
  font-family: ${props => props.theme.fonts[0]};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 3px 6px rgba(0, 0, 0, 0.2);
  padding: ${props => props.theme.spaces.extraSmall};
  margin: ${props => props.theme.spaces.large};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 196px;
  margin: ${props => props.theme.spaces.extraSmall};
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  margin: ${props => props.theme.spaces.extraSmall};
  border-radius: 50%;
`;

const Logo = styled.img`
  margin: ${props => props.theme.spaces.small};
`;

const Close = styled.img`
  margin: ${props => props.theme.spaces.extraSmall};
`;

const Name = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.almostBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.grey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


function Notification({ follower, onClick, fadeOut }) {
  return (
    <Theme>
      <Container className={classNames(fadeOut || 'fadeIn')}>
        <ProfileImage src={follower.pictures.thumbnail} alt={follower.pictures.thumbnail}/>
        <TextWrapper>
          <Name>{follower.name}</Name>
          <Text>is following you</Text>
        </TextWrapper>
        <Logo src={live} alt={live}/>
        <Close src={close} alt={close} onClick={() => onClick(follower)} />
      </Container>
    </Theme>

  );
}

export default Notification;
