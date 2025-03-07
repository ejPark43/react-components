import React from "react";
import styled from "styled-components";

function Todo() {
  return (
    <TodoContainer>
      Todo: <InputTodo />
    </TodoContainer>
  );
}

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid magenta;
`;

const InputTodo = styled.input`
  border: 2px solid blue;
  outline: none;
`;
export default Todo;
