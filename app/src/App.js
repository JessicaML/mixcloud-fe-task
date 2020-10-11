import React, { useState, useEffect } from "react";
import { fetchData } from './fetchData';
import styled from "styled-components";
import NotificationContainer from "./NotificationContainer";

import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
`;

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("https://api.mixcloud.com/spartacus/following?limit=10", setData, setError);
  },[]);

  return (
    <Container>
      <h1> Hello World! </h1>
      {data && 
      <NotificationContainer 
        data={data}
      />}
      {error && console.log(error)}
    </Container>
  );
}

export default App;
