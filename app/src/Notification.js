import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from "styled-components";
import live from "./assets/live.svg";
import close from "./assets/close.svg";
import "./App.css";

const Colors = {
  white: "#FFFFFF",
  almostBlack: "#1E2337",
  grey: "#636674",
};

const FontSizes = {
  small: "12.25px",
  medium: "15.75px",
};

const Spaces = {
  extraSmall: "4px",
  small: "8px",
  medium: "12px",
  large: "16px"
};

const Container = styled.div`
  display: flex;
  align-items: center;  
  width: 350px;
  height: 60px;
  font-family: "DM Sans", sans-serif;
  border-radius: 4px;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 3px 6px rgba(0, 0, 0, 0.2);
  padding: ${Spaces.extraSmall};
  margin: ${Spaces.large};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 196px;
  margin: ${Spaces.extraSmall};
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  margin: ${Spaces.extraSmall};
  border-radius: 50%;
`;

const Logo = styled.img`
  margin: ${Spaces.small};
`;

const Close = styled.img`
  margin: ${Spaces.extraSmall};
`;

const Name = styled.div`
  font-size: ${FontSizes.medium};
  color: ${Colors.almostBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div`
  font-size: ${FontSizes.small};
  color: ${Colors.grey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Notification({ follower, onClick, fadeOut }) {
  return (
    <Container data-testid="Container" className={classNames(fadeOut || 'fadeIn')}>
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

Notification.propTypes = {
  onClick: PropTypes.func,
  fadeOut: PropTypes.string,
  follower: PropTypes.shape({
    name: PropTypes.string,
    pictures: PropTypes.shape({
      thumbnail: PropTypes.string
    })
  })
};

export default Notification;
