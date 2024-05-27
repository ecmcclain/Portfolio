import '../styles/Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PlayBtn } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';


const Projects = () => {
    return (
        <section id="projects">
            <Card>
            <Card.Header as="h2">Projects!</Card.Header>
            <Card className = 'border-dark' style={{ width: '30rem' }}>
                <Card.Header as="h5">Lemme Show You a Song</Card.Header>
                <Card.Img variant="top" src="assets/homepage.png" />
                <Card.Body>
                    <Card.Text>
                        Lemme Show You a Song is a full stack web application which allows Spotify users to generate playlists of recommended new songs. 
                    </Card.Text>
                    <footer className="footer">
                        PYTHON | FLASK | POSTGRESSQL | SQLALCHEMY | JAVASCRIPT | JINJA2 | AJAX | SPOTIFY API | CHART.JS | BOOTSTRAP
                    </footer><br></br>
                    <Button href="https://www.youtube.com/watch?v=ALe5D4jcnQs" variant="primary"><PlayBtn /></Button>{' '}
                    <Button href="https://github.com/ecmcclain/LemmeShowYouASong/blob/main/README.md" variant="primary"><Github /></Button>
                </Card.Body>
            </Card>
            </Card>
        </section>
    )
}

export default Projects
