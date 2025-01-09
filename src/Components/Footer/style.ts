import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  color: #111;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


export const FooterSection = styled.div`
  flex: 1 1 200px;
  margin: 1rem;
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #111;
  cursor: pointer;
`;

export const FooterLink = styled.a`
  display: block;
  font-size: 0.9rem;
  color: #111;
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    color: #222;
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
`;

export const FooterBottomText = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  color: #111;
`;


