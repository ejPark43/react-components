import React from "react";
import styled from "styled-components";

function Tabs({ tabs, setTabs }) {
  //   setTabs("TODO");
  return (
    <Container>
      <button onClick={() => setTabs("todo")}>Todo list</button> {tabs}
      <button onClick={() => setTabs("vocab")}>Vocab Study</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
export default Tabs;
