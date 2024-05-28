import '../styles/Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PlayBtn } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import Portfolio from '../assets/portfolio.png';
import LemmeShowYou from '../assets/homepage.png';

const Projects = () => {
    return (
        <section id="projects">
            <Card >
                <Row>
                <Card.Header as="h2">Projects!</Card.Header>
                <Col xs={{span: 10}} 
                        sm={{span: 10}} 
                        md={{span: 6}} 
                        l={{span: 6}} 
                        xl={{span: 6}}>
                <Card className = 'border-dark' style={{ height: '35rem' }}>
                    <Card.Header as="h5"><b>Lemme Show You a Song</b></Card.Header>
                    <Card.Img variant="top" src={LemmeShowYou} />
                    <Card.Body>
                        <Card.Text>
                            A full stack web application which allows Spotify users to generate playlists of recommended new songs. 
                        </Card.Text>
                        <footer className="footer">
                            PYTHON | FLASK | POSTGRESSQL | SQLALCHEMY | JAVASCRIPT | JINJA2 | AJAX | SPOTIFY API | CHART.JS | BOOTSTRAP
                        </footer><br></br>
                        <PlayBtn href="https://www.youtube.com/watch?v=ALe5D4jcnQs" size={28}/>&emsp;
                        <Github href="https://github.com/ecmcclain/LemmeShowYouASong/blob/main/README.md" size={28}/>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={{span: 10}} 
                        sm={{span: 10}} 
                        md={{span: 6}} 
                        l={{span: 6}} 
                        xl={{span: 6}}>
                <Card className = 'border-dark' style={{ height: '35rem' }}>
                    <Card.Header as="h5"><b>Personal Portfolio</b></Card.Header>
                    <Card.Img variant="top" src={Portfolio} />
                    <Card.Body>
                        <Card.Text>
                            Meta, I know. A living portfolio of my work so far. This project is hosted on GitHub pages and is frequently updated with my new work.  
                        </Card.Text>
                        <footer className="footer">
                            REACT | BOOTSTRAP
                        </footer><br></br>
                        <Github  href="https://github.com/ecmcclain/Portfolio" size={28}/>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Card>
        </section>
    )
}

export default Projects
