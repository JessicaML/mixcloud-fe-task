import React, { useEffect, useState, useRef } from "react";
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

  const isInitialMount = useRef(true);
  const maxNotifs = 3;

  useEffect(() => {
    if (isInitialMount.current) {
      setActiveNotifs(data.data.slice(0, maxNotifs))
      setWaitingNotifs(data.data.slice(maxNotifs))  
     isInitialMount.current = false;  
    } else {
    if (waitingNotifs.length > 0) {
      const timer = setTimeout(() => {
        addThreeFadeOutClasses(activeNotifs);
        
        setActiveNotifs(waitingNotifs.slice(0, maxNotifs))
        setWaitingNotifs(waitingNotifs.slice(maxNotifs))  
      }, 5000);
      return () => clearTimeout(timer);
    } else if (activeNotifs.length > 0) {
        const timer = setTimeout(() => {

          addThreeFadeOutClasses(activeNotifs);

          setActiveNotifs([])
          setWaitingNotifs([])
        }, 5000);
        return () => clearTimeout(timer);
      } 
   }
},[data.data, waitingNotifs, activeNotifs]);

  const onClick = (follower) => {
    const list = removeNotif(follower)
    if (waitingNotifs.length > 1 && activeNotifs.length < 4) {
      setActiveNotifs(addNotif(list))
    } else {
      setTimeout(()=>setActiveNotifs(list),250);
    }
  }

  const removeNotif = (follower) => {
    addFadeOutClass(follower)
    const list = activeNotifs.filter(notif => notif.key !== follower.key)
    return list;
  }

  const addNotif = (list) => {
    setWaitingNotifs(waitingNotifs.slice(1))
    list.push(waitingNotifs[0])    
    return list
  }

  const addFadeOutClass = (follower) => {
    const toBeRemoved = activeNotifs.filter(notif => notif.key === follower.key)
    const freshList = activeNotifs.filter(notif => notif.key !== follower.key)
    toBeRemoved[0].fadeOut = 'fade0ut';
    freshList.push(toBeRemoved[0])
    setActiveNotifs(freshList)
  }

  const addThreeFadeOutClasses = (list) => {
    const freshlist = [];
    list.forEach(toBeRemoved => { 
      toBeRemoved.fadeOut = 'fade0ut'
      freshlist.push(toBeRemoved)
    });
    console.log(freshlist)
    setActiveNotifs(freshlist)
  }

  return (
      <Container>
        {activeNotifs && activeNotifs.map((follower) => {
          console.log(follower.fadeOut)
          return (
            <Notification
              fadeOut={follower.fadeOut}
              key={follower.key}
              follower={follower}
              onClick={onClick}
            />
          )
        }
          
          
        )}
      </Container>
  );
}

export default NotificationContainer;
