import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: var(--background-color);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
`;

const NavMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: var(--background-color);
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    width: 100%;
    display: table;
    text-align: center;
  }
`;



const Navbar = () => {


  return (
    <Nav>
      <Logo to="/">ParaMed Care</Logo>
      <NavMenu isOpen={false}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/resources">Ressources</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
