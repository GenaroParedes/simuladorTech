import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo.jsx';
import CartWidget from './CartWidget.jsx';
import { NavLink } from 'react-router-dom';

export default function NavbarSecond(){
    return (
        <Navbar collapseOnSelect expand="lg" style={{borderBottom: '1px solid #ccc'}} >
            <Container>
                {/* Logo a la izquierda */}
                <Logo />

                {/* Carrito a la derecha */}
                <div className="d-flex align-items-center order-lg-2 ms-auto">
                    <CartWidget />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2" />
                </div>

                {/* Links colapsables (aparecen debajo en mobile) */}
                <Navbar.Collapse id="responsive-navbar-nav" className="order-lg-1 w-100">
                    <Nav className="me-auto justify-content-center w-100">
                        <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to={'/category/Auriculares'}>Auriculares</Nav.Link>
                        <Nav.Link as={NavLink} to={'/category/Teclados'}>Teclados</Nav.Link>
                        <Nav.Link as={NavLink} to={'/category/Mouses'}>Mouses</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}