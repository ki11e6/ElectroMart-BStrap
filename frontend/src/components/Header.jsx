import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'; //this is used for Link from react-router
import logo from '../assets/logo3.png';
function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} alt="logo" className="logo" />
                            <span>ElectroMart</span>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* align to the left so ms-auto */}
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <FaShoppingCart />
                                    <span> Cart</span>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser />
                                    <span>Sign</span>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
