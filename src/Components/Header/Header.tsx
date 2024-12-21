import React from 'react';
import { Header, HeaderContainer, Logo, HeaderRight, NavItem, NavLink, VerticalLine } from './style.ts';

const HeaderComponent: React.FC = () => {
  return (
    <Header>

      <HeaderContainer>
        <Logo href="#">NIKE</Logo>
        <HeaderRight>

          <NavItem>
            <NavLink href="#">Trouver un magasin</NavLink>
            <VerticalLine />
          </NavItem>

          <NavItem>
            <NavLink href="#">Aide</NavLink>
            <VerticalLine />
          </NavItem>

          <NavItem>
            <NavLink href="#">Rejoins-nous</NavLink>
            <VerticalLine />
          </NavItem>

          <NavItem>
            <NavLink href="#">S'identifier</NavLink>
          </NavItem>

        </HeaderRight>

      </HeaderContainer>
    </Header>
  );
};

export default HeaderComponent;
