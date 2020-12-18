import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchData from '../services/fetchData';
import NotificationContainer from './NotificationContainer';
import '../App.css';

const Colors = {
  lightGrey: '#E5E5E5',
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lightGrey};
`;

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('https://api.mixcloud.com/spartacus/following?limit=10', setData, setError);
  }, []);

  return (
    <Container>
      {data
      && (
        <NotificationContainer
          data={data.data}
        />
      )}
      {error && console.log(error)}
    </Container>
  );
}

export default App;
