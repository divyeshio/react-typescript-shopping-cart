import { Container, Nav, Navbar as NavBarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function NavBar() {
    return (<NavBarBs className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
        </Container>
        Hi
    </NavBarBs>)
}