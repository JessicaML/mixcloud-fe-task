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
    // setActiveNotifs(data.data.slice(0, 3))
    setWaitingNotifs(data.data.slice(3))
      data.data.forEach(follower => {
        if (activeNotifs.length < 3) {
          activeNotifs.push(follower)
          setActiveNotifs(activeNotifs)
          setTimeout(() => {
            setActiveNotifs(removeNotif(follower));
          }, 5000);  
        }
      })
  },[data.data]);


  const onClick = (follower) => {
    const list = removeNotif(follower)
    if (waitingNotifs.length > 1 && activeNotifs.length < 3) {
      setActiveNotifs(addNotif(list));
      setTimeout(() => {
        setActiveNotifs(removeNotif(follower));
      }, 5000);  

    } else {
      setActiveNotifs(list);
    }
  }

  const removeNotif = (follower) => {
    const list = activeNotifs.filter(notif => notif.key !== follower.key)
    return list;
  }

  const addNotif = (list) => {
    const waiting = waitingNotifs
    waiting.shift()
    setWaitingNotifs(waiting)
    list.push(waitingNotifs[0])    
    return list
  }

  return (
    <Container>
      {activeNotifs && activeNotifs.map((follower) =>
        <Notification 
          key={follower.key}
          follower={follower}
          onClick={onClick}
        />
      )}
    </Container>
  );
}

export default NotificationContainer;
