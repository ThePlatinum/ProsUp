import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
import brand from '../resources/prosup_theme.svg';
import '../styles/header.scss';

function Header() {
/* 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); */

  return (
    <Navbar className="App-Header" color="white" light expand="md">
      <div className='Container'>
        <NavbarBrand href="/"  className='brand'><img src={brand} alt="ProsUp"/></NavbarBrand>
        
        {/* 
        <NavbarToggler onClick={toggle} /> 
        <Collapse isOpen={isOpen} navbar style={{justifyContent: 'space-between', flexGrow: '0'}}>
          <Nav className="mr-auto" navbar>
            
          </Nav>
        </Collapse>
        */}
      </div>
    </Navbar>
  )
}

export default Header;