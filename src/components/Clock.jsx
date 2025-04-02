import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const [clockTime, setClockTime] = useState("");
  const [stringDate, setStringDate] = useState("");

  const CalculatedTime = () => {
    let now = new Date();
    let hour = String(now.getHours()).padStart("2", 0);
    let minute = String(now.getMinutes()).padStart("2", 0);
    let second = String(now.getSeconds()).padStart("2", 0); // 한자릿수 숫자일땐 앞에 0 없이 나오므로, 두자리수로 표현해주기 위해서 padStart사용.
    let year = now.getFullYear(); // 년도
    let month = now.getMonth(); // 월
    let date = now.getDate(); // 날짜
    setStringDate(`${year}년 ${month + 1}월 ${date}일`);
    return `${hour}:${minute}:${second}`;
  };

  console.log("AA");
  useEffect(() => {
    setInterval(() => setClockTime(CalculatedTime()), 1000);
  }, []);
  return (
    <Container>
      <DatePart>{stringDate}</DatePart>
      <ClockPart>{clockTime}</ClockPart>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  height: 130px;
  padding: 20px; //width값 없애고 그냥 Padding값만 줌, 자동으로 padding값 적용된 width로 설정됨.
`;

const DatePart = styled.div`
  display: flex;
  border: 2px solid gold;
  justify-content: center;
  font-size: 30px;
`;
const ClockPart = styled.div`
  display: flex;
  border: 2px solid black;
  justify-content: center;
  color: black;
  font-size: 70px;
`;
export default Clock;
