'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const MobileMenuWrapper = styled.div<{ $height: number; $toggle: boolean }>`
  visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
  position: fixed;
  top: ${(props) => props.$height}px;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(${getThemeColors('secondary')});
  width: 100%;
  max-width: 300px;
  overflow-y: auto;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  transform: ${({ $toggle }) =>
    $toggle ? 'translateX(0%)' : 'translateX(100%)'};
`;

const MenuItem = styled.a`
  margin-left: 0.5rem;
  padding: 1rem;
  color: rgb(${getThemeColors('text')});
  font-weight: bold;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: rgb(${getThemeColors('hoverBackground')});
  }
`;

const SubMenuWrapper = styled.div`
  margin-left: 1rem;
  background-color: rgb(${getThemeColors('primary')});
  position: relative;
  display: flex;
  flex-direction: column;
`;
const SubMenuItem = styled.a`
  padding: 0.5rem 1rem;
  color: rgb(${getThemeColors('text')});
  font-weight: normal;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: rgb(${getThemeColors('hoverBackground')});
  }
`;

export interface MobileMenuProps {
  isOpen: boolean;
  height?: number;
  onClose: () => void;
  pages: {
    iconComponent?: React.ReactNode;
    item: string;
    link: string;
    subPages?: { subItem: string; subLink: string }[];
  }[];
  hamburgerRef?: React.RefObject<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  height = 60,
  pages,
  hamburgerRef,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target as Node);
      const isOutsideHamburger =
        hamburgerRef?.current &&
        !hamburgerRef.current.contains(event.target as Node);

      if (isOutsideMenu && isOutsideHamburger) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, hamburgerRef]);

  return (
    <MobileMenuWrapper ref={menuRef} $toggle={isOpen} $height={height}>
      {pages.map(({ iconComponent, item, link, subPages }) => (
        <div key={link} style={{ display: 'grid' }}>
          <MenuItem key={item} href={link}>
            {iconComponent}
            {item}
          </MenuItem>
          {subPages &&
            subPages.map((subPage) => (
              <SubMenuWrapper key={subPage.subItem}>
                <SubMenuItem href={subPage.subLink}>
                  {subPage.subItem}
                </SubMenuItem>
              </SubMenuWrapper>
            ))}
        </div>
      ))}
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
