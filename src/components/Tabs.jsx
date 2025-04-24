import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
function Tabs({ tabs, setTabs }) {
  //   setTabs("TODO");
  return (
    <Container>
      <Button onClick={() => setTabs("todo")}>Todo list</Button> {tabs}
      <Button onClick={() => setTabs("vocab")}>Vocab Study</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  padding: 8px;
  border: 2px solid blue;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.demi_blue};
  }
`;
export default Tabs;
