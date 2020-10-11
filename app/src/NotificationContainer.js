import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

import "./App.css";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

function NotificationContainer({ data }) {

  return (
    <Container>
      {data.data.map((follower) =>
      <Notification 
        key={follower.key}
        follower={follower}
      />)}
    </Container>
  );
}

export default NotificationContainer;
