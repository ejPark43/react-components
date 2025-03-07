import React from "react";
import styled from "styled-components";

function Vocab() {
  return <VocabContainer>Vocab</VocabContainer>;
}

export default Vocab;
const VocabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid magenta;
`;
