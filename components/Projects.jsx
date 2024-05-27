import '../styles/Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PlayBtn } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';

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
                    <Card.Header as="h5">Lemme Show You a Song</Card.Header>
                    <Card.Img variant="top" src="assets/homepage.png" />
                    <Card.Body>
                        <Card.Text>
                            A full stack web application which allows Spotify users to generate playlists of recommended new songs. 
                        </Card.Text>
                        <footer className="footer">
                            PYTHON | FLASK | POSTGRESSQL | SQLALCHEMY | JAVASCRIPT | JINJA2 | AJAX | SPOTIFY API | CHART.JS | BOOTSTRAP
                        </footer><br></br>
                        <Button href="https://www.youtube.com/watch?v=ALe5D4jcnQs" variant="primary"><PlayBtn /></Button>{' '}
                        <Button href="https://github.com/ecmcclain/LemmeShowYouASong/blob/main/README.md" variant="primary"><Github /></Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={{span: 10}} 
                        sm={{span: 10}} 
                        md={{span: 6}} 
                        l={{span: 6}} 
                        xl={{span: 6}}>
                <Card className = 'border-dark' style={{ height: '35rem' }}>
                    <Card.Header as="h5">Personal Portfolio</Card.Header>
                    <Card.Img variant="top" src="assets/homepage.png" />
                    <Card.Body>
                        <Card.Text>
                            A living portfolio of my work so far. This project is hosted on GitHub pages and is frequently updated with my new work.  
                        </Card.Text>
                        <footer className="footer">
                            REACT | BOOTSTRAP
                        </footer><br></br>
                        <Button href="https://github.com/ecmcclain/Portfolio" variant="primary"><Github /></Button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Card>
        </section>
    )
}

export default Projects
