import React from "react";
import styled from "styled-components";

function Memo() {
  return <MemoContainer>MEMO!!!</MemoContainer>;
}

export default Memo;
const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  border: 2px solid magenta;
`;
