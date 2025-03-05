import React from "react";
import styled from "styled-components";

function Clock() {
  return (
    <>
      <Container>
        <DatePart>2025.03.05</DatePart>

        <ClockPart>00:00:00</ClockPart>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  width: 100%;
  height: 200px;
  padding: 20px;
`;

const DatePart = styled.div`
  display: flex;
  border: 2px solid gold;
  justify-content: center;
  font-size: 30px;
`;
const ClockPart = styled.div`
  display: flex;
  border: 2px solid black;
  justify-content: center;
  color: black;
  font-size: 70px;
`;
export default Clock;
