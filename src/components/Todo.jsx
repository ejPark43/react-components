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

// [];

// const getTodosFromStorage = () => {
//   localStorage.getItem(TODOS_KEY);
// };
// const saveTodos = (a) => {
//   console.log(a);
//   localStorage.setItem(TODOS_KEY, a);
//   // getTodosFromStorage();
// };

function Todo() {
  const [value, setValue] = useState("");
  let todos = [];
  /* localstorage에 이미 저장되어있는 투두스를 가져와서 넣어야함. 현재 새로고침하면 이전에 갖고있던 값을 가져오지 않는중(let 으로 todos를 초기화하는중이라서...) */
  todos = JSON.parse(localStorage.getItem("todos")); // localstorage에 들어있던 todos 배열의 값을 가져와서 새로고침했을때도 배열을 동일하게 가져옴

  function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }
  const enterTodo = (a) => {
    if (a != "") {
      // 빈 문자열이 아닐때만 넣어줌.
      todos.push(a); //새로운 todo가 생길 때마다 이 배열에 넣어줄 것임.(=push 해줄거임)
      saveTodos();
    }
  };

  const enterPressed = useCallback(
    (e) => {
      if (e.code == "Enter") {
        if (e.nativeEvent.isComposing) return; // 한글 입력 시 마지막글자 중복으로 입력되는 버그 해결. 한글이 끝났을 떄 아직도 현재 composing 중인걸로 착각하기 때문에, 해당 경우 제외 시킴
        console.log("enter pressed!!!");
        let a = e.target.value;
        enterTodo(a);
        setValue("");
        e.preventDefault();
      }
    },
    [value]
  );

  /*
  엔터 입력 시: 
  1. 화면에 todo가 새로 추가되어야함. 
  2. todos에 새로운 todo가 추가됨 
  3. input 부분이 초기화 되어야함(빈칸)
  */

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const deleteTodo = (todo) => {
    console.log("delete ", todo);
  };

  return (
    <TodoContainer>
      <WriteTodo>
        Todo:
        <InputTodo
          onKeyDown={(e) => enterPressed(e)}
          onChange={onChange}
          value={value}
        />
        {/* <SetTodoBtn onClick={() => console.log("set todo!")}>set</SetTodoBtn> */}
      </WriteTodo>
      <ShowTodos>
        {todos.map((todo) => (
          <EachTodo key={todo}>
            {todo} <DeleteBtn onClick={() => deleteTodo(todo)}>X</DeleteBtn>
          </EachTodo>
        ))}
      </ShowTodos>
    </TodoContainer>
  );
}
const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  border: 2px solid red;
`;
const EachTodo = styled.div`
  display: flex;
  padding: 8px;
  width: 50%;
  justify-content: space-between;
  border-bottom: 2px solid red;
`;
const ShowTodos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  border: 2px solid gold;
  overflow: scroll;
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
// const SetTodoBtn = styled.div`
//   padding: 10px;
//   /* width: 1rem; */
//   border: 2px solid #29b943;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #29b943;
//     transition: 0.1s;
//   }
// `;
export default Todo;
