import React from 'react';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const getThemeWidth =
  (prop: string) =>
  ({ theme }: any) =>
    theme[prop];

const StyledButton = styled.button`
  background-color: rgb(${getThemeColors('button')});
  color: rgb(${getThemeColors('buttonText')});
  font-weight: bold;
  font-size: 1.2rem;
  padding: 8px;
  border: 2px solid rgb(${getThemeColors('button')});
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    background-color: rgb(${getThemeColors('buttonHover')});
    color: rgb(${getThemeColors('buttonHoverText')});
    border: 2px solid rgb(${getThemeColors('button')});
  }
  @media (min-width: ${getThemeWidth('windowWidth')}px) {
    font-size: 1.5rem;
  }
`;

const Button = ({
  label,
  style,
}: {
  label: string;
  style?: React.CSSProperties;
}) => {
  return <StyledButton style={style}>{label}</StyledButton>;
};

export default Button;
