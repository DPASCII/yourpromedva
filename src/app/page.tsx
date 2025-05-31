"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/assets/Temporary Background.webp") no-repeat;
  background-size: cover;
  height: 100vh;
`;

const TextWrapper = styled.div`
  background: linear-gradient(to right, white, transparent);
  height: min(50vh, 360px);
  width: min(100vw, 1920px);
  h1 {
    font-size: min(10vh, 72px);
    line-height: 1;
    font-weight: 600;
    color: #1286a3;
    padding: 0 32px;
  }

  h2 {
    padding: min(6.5vh, 44px) 32px 8px;
    font-size: min(8vh, 60px);
    font-weight: bold;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>WEBSITE COMING SOON!</h2>
        <h1>
          YOUR PROFESSIONAL <br /> MEDICAL VIRTUAL ASSISTANT
        </h1>
      </TextWrapper>
    </Wrapper>
  );
}
