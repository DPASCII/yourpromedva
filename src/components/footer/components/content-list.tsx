'use client';
import styled from 'styled-components';
import StyledLink from '../../styled-link';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  width: fit-content;
  gap: 0.5rem;
`;

const ListWrapper = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
`;

const Item = styled.li`
  margin-top: 1.5rem;
  font-weight: 600;
  list-style-type: none;
`;

const ContentList = ({
  title,
  subtitle,
  itemlist,
  style,
}: {
  title?: string;
  subtitle?: string;
  itemlist?: { item: string; subitem: string; link?: string }[];
  style?: {};
}) => {
  return (
    <Wrapper style={style}>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {itemlist &&
        itemlist.map((listitem, index) => (
          <ListWrapper key={index}>
            <Item>{listitem.item}</Item>
            {listitem.subitem &&
              (listitem.link ? (
                <StyledLink href={listitem.link}>{listitem.subitem}</StyledLink>
              ) : (
                <span>{listitem.subitem}</span>
              ))}
          </ListWrapper>
        ))}
    </Wrapper>
  );
};

export default ContentList;
