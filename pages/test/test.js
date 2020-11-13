import { useState } from "react";
import styled from "styled-components";

export default function Test() {
  const [test, setTest] = useState("test");

  return (
    <>
      <Title>{test}</Title>
      <button onClick={() => setTest("zweiter Test")}> Klick mich </button>
    </>
  );
}

const Title = styled.h1`
  color: blue;
  padding: 30px;
`;
