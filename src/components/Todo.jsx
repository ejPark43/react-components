import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { theme } from "../styles/theme";
/*
<version 1> 
1. todo 작성하면 하나씩 생긴다. 
2. todo는 삭제, 수정 기능이 있다. 
3. todo list에 아무것도 없으면 추가하라는 메시지 띄우기 
4. todo를 완료했다면 완료한 칸으로 이동하기

*/

const TODOS_KEY = "todos"; // 로컬 저장소에 저장된 키 이름

function Todo() {
  const [value, setValue] = useState("");
  // let todos = [];

  // const [isOn, setisOn] = useState(false);

  // const toggleHandler = () => {
  //   // isOn의 상태를 변경하는 메소드를 구현
  //   setisOn(!isOn)
  // };

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
        {todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <EachTodo key={todo.id}>
              {todo.todoText.length > 20
                ? todo.todoText.substr(0, 20) + "..."
                : todo.todoText}
              <div style={{ display: "flex" }}>
                {/* <ToggleBtn
                key={todo.id}
                // onClick={() => setTodos()}
                onClick={() => {
                  setTodos((prev) =>
                    prev.map(
                      (
                        item // 특정 아이템을 찾아서.... 해당 아이템의 checked값만 바꿔줌
                      ) =>
                        item.id === todo.id
                          ? { ...item, checked: !item.checked }
                          : item
                    )
                  );
                }}
                $isChecked={todo.checked}
              /> */}

                <ToggleSwitch>
                  <CheckBox
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => {
                      setTodos((prev) =>
                        prev.map(
                          (
                            item // 특정 아이템을 찾아서.... 해당 아이템의 checked값만 바꿔줌
                          ) =>
                            item.id === todo.id
                              ? { ...item, checked: !item.checked }
                              : item
                        )
                      );
                    }}
                  />
                  <ToggleSlider />
                </ToggleSwitch>
                <DeleteBtn onClick={() => deleteTodo(todo.id)}>
                  <DeleteIcon />
                </DeleteBtn>
              </div>
            </EachTodo>
          ))}
      </ShowTodos>
    </TodoContainer>
  );
}

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  width: 47.7px;
  height: 23.33px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ff3815;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #0fc70f;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
// const ToggleBtn = styled.div`
//   display: flex;
//   cursor: pointer;
//   width: 20px;
//   height: 20px;
//   border: 2px solid ${(props) => (props.$isChecked ? "blue" : "red")};
//   background-color: ${(props) => (props.$isChecked ? "green" : "red")};
// `;
const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 2px; */
  //  width: 1rem;
  // height: 1rem;
  cursor: pointer;
  /* border: 2px solid blue; */
  border-radius: 5px;
  &:hover {
    background-color: rgb(130, 168, 255);
  }
`;
const EachTodo = styled.div`
  display: flex;
  padding: 8px;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  border: 2px solid beige;
  margin-bottom: 2px;
  border-radius: 5px;
`;
const ShowTodos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  border: 2px solid gold;
  overflow: scroll;
`;
const TodoContainer = styled.div`
  padding-top: 10px;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid ${theme.colors.demi_blue};
`;
const WriteTodo = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  padding-bottom: 10px;
`;
const InputTodo = styled.input`
  border: 2px solid ${theme.colors.demi_gray};
  outline: none;
  border-radius: 5px;
  /* height: 30px; */
  padding: 10px;
  width: 200px;
  font-size: 15px;
  &:focus {
    border: 2px solid #9c9ec1;
  }
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
