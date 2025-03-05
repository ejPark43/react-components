import React, { useState } from "react";
import styled from "styled-components";
import Clock from "../components/Clock";
import Tabs from "../components/Tabs";
import Todo from "../components/Todo";
import Vocab from "../components/Vocab";

function Homepage() {
  const [tabs, setTabs] = useState("todo");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Clock />
        <Tabs tabs={tabs} setTabs={setTabs} />
        {tabs === "todo" ? <Todo /> : <Vocab />}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid red;
  width: 700px;
  height: 100vh;
`;
export default Homepage;
