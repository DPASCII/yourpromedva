'use client';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const getThemeBreakpoints =
  (prop: string) =>
  ({ theme }: any) =>
    theme.breakpoints[prop];

const TitleBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  text-align: center;
  gap: 1rem;
  background-color: rgba(${getThemeColors('secondary')}, 0.7);
  color: rgb(${getThemeColors('secondaryText')});
  border-radius: 32px;
  height: 70%;
  width: calc(100% - 3rem);
  max-width: ${({ theme }) => theme.windowWidth}px;
  margin: 3rem;
  padding: 0 0.5rem;
  overflow: hidden;
`;

const TextWrapper = styled.div``;

const Title = styled.h1`
  font-size: 2.5rem;
  white-space: pre-line;
  padding: 1rem;
  @media (min-width: ${getThemeBreakpoints('tablet')}px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.h2`
  white-space: pre-line;
  font-size: 1.25rem;
  @media (min-width: ${getThemeBreakpoints('tablet')}px) {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

const ChildrenWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TitleBlock = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  return (
    <TitleBlockWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </TitleBlockWrapper>
  );
};

export default TitleBlock;
