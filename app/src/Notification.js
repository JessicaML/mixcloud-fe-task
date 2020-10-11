import React from "react";
import styled from "styled-components";
import live from "./assets/live.svg";
import close from "./assets/close.svg";

import "./App.css";

const Container = styled.div`
  display: flex;
`;

function Notification({ follower }) {
  return (
    <Container>
    {console.log(follower, follower)}
      <img src={follower.pictures.thumbnail} />
      <h1>{follower.name}</h1>
      <h2>is following you</h2>
      <img src={live} />
      <img src={close} />
    </Container>
  );
}

export default Notification;
