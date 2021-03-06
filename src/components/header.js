import { useState } from 'react';
import {
  Collapse, Container,
  Nav, Navbar, NavbarBrand,
  NavbarToggler, NavItem, NavLink
} from 'reactstrap';
import brand from '../resources/prosup_theme.svg';
import '../styles/header.scss';
import ContributeBtn from './contribute';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container className='App-Header'>
        <Navbar color="white" light expand="lg" sticky="top" > 
          <NavbarBrand href='/'>
            <img src={brand} alt="ProsUp"/>
          </NavbarBrand>
            
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar style={{width:'100%', justifyContent:'right'}}>
            <Nav className="ml-auto" style={{justifyContent:'space-between'}}>
                <NavItem>
                    <NavLink href="/">
                      Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/putprosup">
                    Submission
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/catalogues">
                    Catalogue
                    </NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret >
                    Products / Services
                  </DropdownToggle>
                  <DropdownMenu right style={{borderRadius:'0px'}}>
                      <DropdownItem>
                          <NavLink>
                            Enroll to Learn
                          </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                          <NavLink>
                            Document Templates
                          </NavLink>
                      </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                <NavItem>
                  <ContributeBtn styleClass='contribute'/>
                </NavItem>
            </Nav>
          </Collapse>
         </Navbar>
      </Container>
  )
}

export default Header;