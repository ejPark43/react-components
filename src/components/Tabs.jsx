import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
function Tabs({ tabs, setTabs }) {
  //   setTabs("TODO");
  return (
    <Container>
      <Button onClick={() => setTabs("todo")}>Todo list</Button> {tabs}
      <Button onClick={() => setTabs("memo")}>Memo </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;
const Button = styled.div`
  display: flex;
  padding: 8px;
  border: 2px solid ${theme.colors.secondary};
  color: ${theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.secondary};
    color: white;
  }
`;
export default Tabs;
