import '../styles/NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import JimiIcon from "../assets/jimi.png";


const NavBar = () => {
    return (

      <Navbar expand="lg" fixed='top' >
        <Container>
            <Navbar.Brand href="/#homepage">Lily McClain</Navbar.Brand>
            <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#homepage">Homepage</Nav.Link>
                    <Nav.Link href="/#projects">Projects</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#skills">Technologies</Nav.Link>
                    <Nav.Link href="/#resume">Resume</Nav.Link>
                </Nav>
                <Link
                    to="/jimi"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}>
                            <button id="moreJimi">
                                <img className="jimiIcon" src={JimiIcon}></img>
                                <b>JIMI SITS&nbsp;&nbsp;</b>
                                <img className="jimiIcon" src={JimiIcon}></img>
                                </button>
                </Link>                
            </Navbar.Collapse>
            </Container>
    </Navbar>

    )
}

export default NavBar