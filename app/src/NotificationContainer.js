import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Notification from "./Notification";
import Expire from './Expire'

import "./App.css";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

function NotificationContainer({ data }) {
  const [activeNotifs, setActiveNotifs] = useState([]);
  const [waitingNotifs, setWaitingNotifs] = useState([]);

  const isInitialMount = useRef(true);
  const maxNotifs = 3;

  useEffect(() => {
    if (isInitialMount.current) {
      setActiveNotifs(data.data.slice(0, maxNotifs))
      setWaitingNotifs(data.data.slice(maxNotifs))  
     isInitialMount.current = false;  
    } else {

    if (waitingNotifs.length > 3) {
      setInterval(() => {
        console.log('activeNotifs', activeNotifs)
        console.log('waitingNotifs', waitingNotifs)
        setActiveNotifs(waitingNotifs.slice(0, maxNotifs))
        setWaitingNotifs(waitingNotifs.slice(maxNotifs))  
      }, 5000);
    } else if (waitingNotifs.length > 0) {
      setTimeout(() => {
        setActiveNotifs(waitingNotifs)
        setWaitingNotifs([])
      }, 5000);
    } else  {
      setTimeout(() => {
        setActiveNotifs([])
        setWaitingNotifs([])
      }, 5000);
    }
  }

  },[data.data, waitingNotifs, activeNotifs]);


  const onClick = (follower) => {
    const list = removeNotif(follower)
    if (waitingNotifs.length > 1 && activeNotifs.length < 4) {
      setActiveNotifs(addNotif(list));
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
    // <Expire delay={5000}>
      <Container>
        {activeNotifs && activeNotifs.map((follower) =>
          <Notification 
            key={follower.key}
            follower={follower}
            onClick={onClick}
          />
        )}
      </Container>
    // </Expire>
  );
}

export default NotificationContainer;
