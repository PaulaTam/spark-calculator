import { Navbar, Container } from 'react-bootstrap';

const TopNavBar = () => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="/">Rolls</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default TopNavBar;