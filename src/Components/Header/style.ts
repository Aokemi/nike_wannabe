import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 0.5rem 1rem;
  font-family: Arial, sans-serif;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

export const HeaderRight = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 1rem;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const VerticalLine = styled.div`
  border-right: 1px solid grey;
  height: 1rem;
  margin: 0.5rem;
`;
