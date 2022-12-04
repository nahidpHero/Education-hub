import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../images/logo.svg'



const Header = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
            <img src={logo} height="40" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className='text-white' href="#deets">Home</Nav.Link>
            <Nav.Link className='text-white' href="#memes">About</Nav.Link>
            <Nav.Link className='text-white' href="#memes">Login </Nav.Link>
            <Nav.Link className='text-white' href="#memes">Ligout </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;