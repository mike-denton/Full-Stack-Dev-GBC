import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <>
            <Navbar bg="secondary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home"><b>Home</b></Nav.Link>
                        <Nav.Link href="eventlog"><b>Event Log</b></Nav.Link>
                        <Nav.Link href="chatmessages"><b>Chat Messages</b></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;