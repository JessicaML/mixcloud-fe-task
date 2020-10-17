import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import removeOrReplaceNotif from '../utils/slideUp';
import Notification from './Notification';
import '../App.css';

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

  const addThreeFadeOutClasses = (list) => {
    const freshlist = [];
    list.forEach((toBeRemoved) => {
      toBeRemoved.fadeOut = 'fadeOut';
      freshlist.push(toBeRemoved);
    });
    setActiveNotifs(freshlist);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      setActiveNotifs(data.slice(0, maxNotifs));
      setWaitingNotifs(data.slice(maxNotifs));
      isInitialMount.current = false;
    } else {
      if (waitingNotifs.length > 0) {
        const timer = setTimeout(() => {
          addThreeFadeOutClasses(activeNotifs);

          setTimeout(() => {
            setActiveNotifs(waitingNotifs.slice(0, maxNotifs));
            setWaitingNotifs(waitingNotifs.slice(maxNotifs));
          }, 250);
        }, 5000);
        return () => clearTimeout(timer);
      }
      if (activeNotifs.length > 0) {
        const timer = setTimeout(() => {
          addThreeFadeOutClasses(activeNotifs);
          setTimeout(() => {
            setActiveNotifs([]);
          }, 250);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [data, waitingNotifs, activeNotifs]);

  const onClick = (follower) => {
    removeOrReplaceNotif(follower, activeNotifs, waitingNotifs, setActiveNotifs, setWaitingNotifs);
  };

  return (
    <Container>
      {activeNotifs && activeNotifs.map((follower) => (
        <Notification
          fadeOut={follower.fadeOut}
          slideUp={follower.slideUp}
          key={follower.key}
          follower={follower}
          onClick={onClick}
        />
      ))}
    </Container>
  );
}

NotificationContainer.propTypes = {
  data: PropTypes.shape({}),
};

export default NotificationContainer;
