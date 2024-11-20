import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </Box>
    </div>
  );
}

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export default App;
