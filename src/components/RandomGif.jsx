import React from "react";
import styled from "styled-components";
import pic1 from "../assets/being_human_SU_gif.webp";
function RandomGif() {
  return (
    <Container>
      <img src={pic1} alt="picture1" />
    </Container>
  );
}

export default RandomGif;

const Container = styled.div`
  display: flex;
  height: 200px;
  width: auto;
  /* height: auto; */
  justify-content: center;
`;
