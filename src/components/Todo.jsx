import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
/*
<version 1> 
1. todo 작성하면 하나씩 생긴다. 
2. todo는 삭제, 수정 기능이 있다. 
3. 하루에 모두 초기화된다.

*/

const TODOS_KEY = "todos"; // 로컬 저장소에 저장된 키 이름

function Todo() {
  const [value, setValue] = useState("");
  // let todos = [];

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(TODOS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    // todos의 상태가 바뀔때마다 로컬에다가 새로 저장함
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const enterTodo = (todoText) => {
    // console.log("!!!!!!!" + todoText);
    if (todoText != "") {
      const newTodo = {
        id: Date.now(),
        todoText,
        checked: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  const enterPressed = useCallback(
    (e) => {
      if (e.code == "Enter" && !e.nativeEvent.isComposing) {
        // 한글 입력 시 마지막글자 중복으로 입력되는 버그 해결. 한글이 끝났을 떄 아직도 현재 composing 중인걸로 착각하기 때문에, 해당 경우 제외 시킴
        console.log("enter pressed!!!");
        // let a = e.target.value;
        enterTodo(value);
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

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <TodoContainer>
      <WriteTodo>
        Todo:
        <InputTodo onKeyDown={enterPressed} onChange={onChange} value={value} />
        {/* <SetTodoBtn onClick={() => console.log("set todo!")}>set</SetTodoBtn> */}
      </WriteTodo>
      <ShowTodos>
        {todos.map((todo) => (
          <EachTodo key={todo.id}>
            {todo.todoText}{" "}
            <div style={{ display: "flex" }}>
              <ToggleBtn
                key={todo.id}
                // onClick={() => setTodos()}
                onClick={() => {
                  let check = !todo.checked;
                  setTodos((prev) => [...prev, (todo.checked = check)]);
                }}
                $isChecked={todo.checked}
              >
                AAAAAAAAA
              </ToggleBtn>
              <DeleteBtn onClick={() => deleteTodo(todo.id)}>X</DeleteBtn>
            </div>
          </EachTodo>
        ))}
      </ShowTodos>
    </TodoContainer>
  );
}
const ToggleBtn = styled.div`
  display: flex;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$isChecked ? "blue" : "red")};
  background-color: gold;
`;
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
