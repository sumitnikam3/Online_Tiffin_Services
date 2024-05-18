import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

<Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href="#home">Tiffin Service</Navbar.Brand>
        <Nav className="me-auto">

            <Nav.Link href="#home">Food List</Nav.Link>
            <Nav.Link href="#home"></Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">User Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Admin Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                <Nav.Link href="#features">LogOut</Nav.Link>
            </NavDropdown>
        </Nav>
</Container>
</Navbar >