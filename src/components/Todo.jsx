import React from "react";
import styled from "styled-components";
/*
<version 1> 
1. todo 작성하면 하나씩 생긴다. 
2. todo는 삭제, 수정 기능이 있다. 
3. 하루에 모두 초기화된다.


*/

// todo를 입력한다.
// 방금 작성한 todo를 local storage에 저장한다.
const TODOS_KEY = "todos"; // 로컬 저장소에 저장된 키 이름

// let todos = []; //새로운 todo가 생길 때마다 이 배열에 넣어줄 것임.(=push 해줄거임)

// function saveTodos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
// }
const enterPressed = (e) => {
  console.log(e);
  if (e.code == "Enter") {
    console.log("enter pressed!!!");
  }
};
function Todo() {
  return (
    <TodoContainer>
      <span>
        Todo: <InputTodo onKeyDown={(e) => enterPressed(e)} />
      </span>
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
