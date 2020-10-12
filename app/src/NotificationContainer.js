import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Notification from "./Notification";

import "./App.css";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

function NotificationContainer({ data }) {
  const [activeNotifs, setActiveNotifs] = useState([]);
  const [waitingNotifs, setWaitingNotifs] = useState([]);

  useEffect(() => {
    setActiveNotifs(data.data.slice(0, 3))
    setWaitingNotifs(data.data.slice(3))
  },[data.data]);


  const onClick = (follower) => {
    const list = activeNotifs.filter(notif => notif.key !== follower.key)
    console.log('waitingNotifs', waitingNotifs)

    if (waitingNotifs.length > 0) {
      list.push(waitingNotifs[0])
      const waiting = waitingNotifs
      console.log('waiting', waiting)
      waiting.shift()
      console.log('waiting', waiting)
      setWaitingNotifs(waiting)  
    }

    setActiveNotifs(list);
  }

  return (
    <Container>
      {activeNotifs.map((follower) =>
      <Notification 
        key={follower.key}
        follower={follower}
        onClick={onClick}
      />)}
    </Container>
  );
}

export default NotificationContainer;
