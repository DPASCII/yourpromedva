'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  align-content: center;
`;

const Wrapper = styled.div`
  color: white;
  display: grid;
  background: rgba(0, 0, 0, 0.7);
  margin: 8px;
  height: 60vh;
  align-content: center;
  text-align: center;
  border-radius: 8px;
  gap: 16px;
  font-size: min(10vw, 40px);
  h1 {
    font-size: min(11vw, 54px);
  }
`;
const ComingSoon = () => (
  <Background>
    <Wrapper>
      <Image
        style={{ position: 'absolute', zIndex: '-9999' }}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src="/assets/coming-soon.webp"
        alt="3 engineers in house"
      />
      <h2>Coming Soon!</h2>
      <h1>PADM CONSTRUCTION SERVICES</h1>
    </Wrapper>
  </Background>
);

export default ComingSoon;
