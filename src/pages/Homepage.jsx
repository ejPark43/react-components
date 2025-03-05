import React from "react";
import styled from "styled-components";
import Clock from "../components/Clock";

function Homepage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        {/* <h1>Homepage!!!!!!!!</h1> */}
        <Clock />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid red;
  width: 700px;
  height: 100vh;
`;
export default Homepage;
