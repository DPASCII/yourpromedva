'use client';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const CardWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  display: grid;
  grid-template-rows: auto 1fr;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  overflow: hidden;

  @media (max-width: max(${({ theme }) => theme.breakpoints.mobile}px, ${({
      $width,
    }) => $width}px)) {
    width: 100%;
    height: auto;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    aspect-ratio: 4/3;
    height: auto;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all linear 0.5s;

  &:hover {
    opacity: 70%;
    transform: scale(98%);
  }
`;

const TextWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  padding: 8px 0;
  color: rgb(${getThemeColors('text')});

  h1 {
    font-size: ${({ $width, $height }) => 0.07 * Math.min($width, $height)}px;
    line-height: 1.2;
  }

  h2 {
    font-size: ${({ $width, $height }) => 0.035 * Math.min($width, $height)}px;
    color: gray;
  }
`;

const Card = ({
  width = 500,
  height = 500,
  text,
  subText,
  link,
  imgSrc,
  alt = 'card image',
}: {
  width: number;
  height: number;
  text: string;
  subText?: string;
  link?: string;
  imgSrc: string;
  alt: string;
}) => {
  return (
    <CardWrapper $width={width} $height={height}>
      <ImgWrapper>
        <a href={link}>
          <StyledImg src={imgSrc} alt={alt} />
        </a>
      </ImgWrapper>
      <TextWrapper $width={width} $height={height}>
        <h1>
          <a href={link} style={link ? { cursor: 'pointer' } : undefined}>
            {text}
          </a>
        </h1>
        {subText && <h2>{subText}</h2>}
      </TextWrapper>
    </CardWrapper>
  );
};

export default Card;
