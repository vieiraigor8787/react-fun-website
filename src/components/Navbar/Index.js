import React from "react";
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav, NavBtn, NavBtnLink, NavLogo, NavbarContainer, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavbarContainer>
              <NavLogo to="/">dolla</NavLogo>
              <MobileIcon>
                  <FaBars />
                  </MobileIcon>    
            <NavMenu>
                <NavItem>
                    <NavLinks to="sobre">Sobre</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="saiba">Saiba mais</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="servicos">Serviços</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="cadastro">Cadastre-se</NavLinks>
                </NavItem>
                <NavBtn>
                    <NavBtnLink to="" >Entrar</NavBtnLink>
                </NavBtn>
            </NavMenu>
          </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
