import '../styles/Homepage.css'
import profilePicture from '../assets/Profile-picture.png';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Homepage = () => {
    return (
        <section id="homepage">
            <br></br>
            <br></br>
            <Card>
            <Container>
                <Row>
                    <Col xs={{span: 12, order: 2}} 
                        sm={{span: 12, order:2 }} 
                        md={{span: 4, order:1 }} 
                        l={{span: 6, order: 1 }} 
                        xl={{span: 6, order: 1 }}
                        style={{
                            textAlign: "center"}}>
                        <img className="profile-pic" src={profilePicture} alt="Profile of Lily McClain"
                        style={{
                            width: "25vw"
                            }}/>
                    </Col>
                    <Col xs={{span: 12, order:1}} 
                            sm={{span: 12, order:1 }} 
                            md={{span: 8, order:2 }} 
                            l={{span: 6, order:2 }} 
                            xl={{span: 6, order:2 }}
                            style={{
                            textAlign: "center",
                            alignContent: "center"}}
                        >
                            <h1
                            style={{fontSize: "6vh",
                                    textAlign:"center"}}>
                            Lily McClain
                        </h1>
                        <h4 style={{
                            textAlign: "center",
                            fontSize: "4vh",
                            color: "#172c66"}}>
                        Software Engineer
                        </h4>
                        <div className="socials"> 
                            <a href='https://github.com/ecmcclain'><Github size={42}/></a>{' '}
                            <a href='https://www.linkedin.com/in/lily-mcclain/'><Linkedin size={42}/></a>
                        </div>  
                    </Col>
                </Row>
        </Container>
        </Card>
        </section>
    )
}

export default Homepage



