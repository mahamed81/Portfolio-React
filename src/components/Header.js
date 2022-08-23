import { useState } from 'react';
import { Navbar,Collapse,NavbarToggler,Nav, NavItem, Container} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
        <Navbar dark color='black' sticky='top' expand='md'>
    
    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
    <Collapse isOpen={menuOpen} navbar>
        <Nav className='ml-auto' navbar>
            <NavItem>
                <NavLink className='nav-link' to='/'>
                    <i className='fa fa-home fa-lg' /> Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav-link' to='/about'>
                    <i className='fa fa-info fa-lg' /> About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav-link' to='/projects'>
                    <i className='fa fa-list fa-lg' /> Projects
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav-link' to='/contact'>
                    <i className='fa fa-address-card fa-lg' /> Contact
                </NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
    </Container>
    
  );
}

export default Header;