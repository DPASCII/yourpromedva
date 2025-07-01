'use client';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const Bun = styled.div`
  width: 2.8rem;
  height: 2.8em;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 6px;
  z-index: 10;

  cursor: pointer;
`;

const Burger = styled.div<{
  $isOpen?: boolean;
  $index?: number;
}>`
  width: 2.5rem;
  height: 0.4em;
  border-radius: 10px;
  background: rgb(${getThemeColors('secondary')});
  transform-origin: 1px;
  transition: all 0.3s linear;
  margin: auto;
`;

export const Hamburger = ({ isOpen }: { isOpen?: boolean }) => (
  <Bun>
    <Burger
      $isOpen={isOpen}
      style={
        isOpen
          ? { transform: 'rotate(45deg) translateX(5%)' }
          : { transform: 'rotate(0deg)' }
      }
    />
    <Burger
      $isOpen={isOpen}
      style={isOpen ? { width: '0' } : { transform: '2.5rem' }}
    />
    <Burger
      $isOpen={isOpen}
      $index={3}
      style={
        isOpen
          ? { transform: 'rotate(-45deg) translateX(5%)' }
          : { transform: 'rotate(0deg)' }
      }
    />
  </Bun>
);

export default Hamburger;
