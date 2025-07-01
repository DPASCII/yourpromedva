// components/styled/StyledLink.ts
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  width: fit-content;
  position: relative;
  padding-bottom: 2px;
  color: rgb(${({ theme }) => theme.colors.secondaryText});
  text-align: inherit;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(${({ theme }) => theme.colors.secondaryText});
    transform-origin: left;
    transition: transform 0.25s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default StyledLink;
