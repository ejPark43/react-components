import React, { useCallback, useState } from "react";
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

let todos = []; //새로운 todo가 생길 때마다 이 배열에 넣어줄 것임.(=push 해줄거임)

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// const getTodosFromStorage = () => {
//   localStorage.getItem(TODOS_KEY);
// };
// const saveTodos = (a) => {
//   console.log(a);
//   localStorage.setItem(TODOS_KEY, a);
//   // getTodosFromStorage();
// };

function Todo() {
  /* localstorage에 이미 저장되어있는 투두스를 가져와서 넣어야함. 현재 새로고침하면 이전에 갖고있던 값을 가져오지 않는중(let 으로 todos를 초기화하는중이라서...) */

  // todos.push(localStorage.getItem("todos"));

  const enterTodo = (a) => {
    todos.push(a);
    saveTodos();
  };
  const enterPressed = (e) => {
    if (e.code == "Enter") {
      console.log("enter pressed!!!");
      let a = e.target.value;
      enterTodo(a);
      setValue("");
    }

    /*
  엔터 입력 시: 
  1. 화면에 todo가 새로 추가되어야함. 
  2. todos에 새로운 todo가 추가됨 
  3. input 부분이 초기화 되어야함(빈칸)
  */
  };
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <TodoContainer>
      <WriteTodo>
        Todo:
        <InputTodo
          onKeyDown={(e) => enterPressed(e)}
          onChange={onChange}
          value={value}
        />
        <SetTodoBtn onClick={() => console.log("set todo!")}>set</SetTodoBtn>
      </WriteTodo>
      <ShowTodos>
        {todos.map((todo) => (
          <EachTodo>{todo}</EachTodo>
        ))}
      </ShowTodos>
    </TodoContainer>
  );
}
const EachTodo = styled.div`
  display: flex;
  border: 2px solid red;
`;
const ShowTodos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid gold;
`;
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid magenta;
`;
const WriteTodo = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: row; */
`;
const InputTodo = styled.input`
  border: 2px solid blue;
  outline: none;
  /* height: 30px; */
  padding: 10px;
  width: 200px;
  font-size: 15px;
`;
const SetTodoBtn = styled.div`
  padding: 10px;
  /* width: 1rem; */
  border: 2px solid #29b943;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #29b943;
    transition: 0.1s;
  }
`;
export default Todo;
