import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'
import Spinner from 'react-bootstrap/Spinner';
function NavigationBar() {
  return (
  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar className='ms-4'><b className='font'><Typed strings={['Reckitt-Benckiser']}typeSpeed={100}loop={true} /></b></Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '60px' }}
            navbarScroll
          >
            <Link className='nav-link' to="/"><b>Home</b></Link>
            <Link className='nav-link' to="/Products"><b>Products</b></Link>
          <Link className='nav-link'to="/Login"><b>Login</b></Link>
            <Link className='me-4 btn btn-dark text-white fw-semibold ' to="/SignUp">SignUp</Link>
           
            <Spinner animation="border" role="status">
    <span className="visually-hidden loader">Loading...</span>
  </Spinner>
           
          </Nav>
         
        </Navbar.Collapse>
 
      </Container>
    </Navbar>
  
  );
}



export default  NavigationBar;