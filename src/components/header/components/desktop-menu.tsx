import React, { useState } from 'react';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const MenuWrapper = styled.div`
  background-color: rgb(${getThemeColors('primary')});
  height: 80%;
  align-self: end;
  position: relative;
  display: flex;
`;

const MenuItem = styled.a<{ $menuWidth: number }>`
  cursor: pointer;
  width: ${({ $menuWidth }) => $menuWidth}px;
  color: rgb(${getThemeColors('text')});
  text-align: center;
  align-content: center;
  justify-content: center;
  padding: 8px;
  transition: linear 0.3s;
  &:hover {
    background-color: rgb(${getThemeColors('hoverBackground')});
  }
`;
const SubMenuItem = styled.a`
  color: rgb(${getThemeColors('text')});
  padding: 16px;
  white-space: nowrap;
  transition: linear 0.3s;
  &:hover {
    background-color: rgb(${getThemeColors('hoverBackground')});
  }
`;

const SubMenuWrapper = styled.div`
  background-color: rgb(${getThemeColors('primary')});
  position: absolute;
  top: 100%;
  left: 0;
  transition: linear 0.3s;
  z-index: 1000;
  display: grid;
`;
export interface DesktopMenuProps {
  menuWidth?: number;
  page: {
    item: string;
    link: string;
    subPages?: { subItem: string; subLink: string }[];
  };
}

const DesktopMenu: React.FC<DesktopMenuProps> = (props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const { page, menuWidth = 200 } = props;
  return (
    <MenuWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MenuItem href={page.link} $menuWidth={menuWidth}>
        {page.item}
      </MenuItem>
      {isDropdownVisible && (
        <SubMenuWrapper>
          {page.subPages &&
            page.subPages.map((subPages, index) => (
              <SubMenuItem key={index} href={subPages.subLink}>
                {subPages.subItem}
              </SubMenuItem>
            ))}
        </SubMenuWrapper>
      )}
    </MenuWrapper>
  );
};

export default DesktopMenu;
