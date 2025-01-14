import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>

          <NavButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </NavButton>
          <NavButton>
            <Icon id="search" strokeWidth={1} />
          </NavButton>
          <NavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </NavButton>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  overflow-y: clip;
  overflow-x: auto;

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--gray-900);
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.5rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    margin: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    margin: 0;
  }
`;

const Side = styled.div`
  flex: 1;

  &:last-of-type {
    flex-shrink: 20;
  }

  @media ${QUERIES.tabletAndSmaller} {
    &:last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavButton = styled(UnstyledButton)`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

export default Header;
