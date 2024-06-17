import '../styles/Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PlayBtn } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import Portfolio from '../assets/portfolio.png';
import LemmeShowYou from '../assets/homepage.png';

import React, { useState } from 'react';


const Projects = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <section id="projects" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Card >
                <Row style={{justifyContent: "center"}}>
                <Card.Header as="h2">Projects</Card.Header>
                <Col xs={{span: 10}} 
                        sm={{span: 10}} 
                        md={{span: 6}} 
                        l={{span: 6}} 
                        xl={{span: 6}}>
                <Card className = 'border-dark' style={{ height: '35rem' }}>
                    <Card.Header as="h5"><b>Lemme Show You a Song</b></Card.Header>
                    <a href="https://www.youtube.com/watch?v=ALe5D4jcnQs"> <Card.Img variant="top" src={LemmeShowYou} /></a>
                    <Card.Body>
                        <Card.Text>
                            A full stack web application which allows Spotify users to generate playlists of recommended new songs. 
                        </Card.Text>
                        <footer className="footer">
                            PYTHON | FLASK | POSTGRESSQL | SQLALCHEMY | JAVASCRIPT | JINJA2 | AJAX | SPOTIFY API | CHART.JS | BOOTSTRAP
                        </footer><br></br>
                        {isShown && (<div><a href="https://www.youtube.com/watch?v=ALe5D4jcnQs"> <PlayBtn size={28} style={{
                            animationIterationCount: "1" }} className="fa-bounce" /></a>&emsp;<a href="https://github.com/ecmcclain/LemmeShowYouASong/blob/main/README.md"> <Github size={28} style={{
                            animationIterationCount: "1" }} className="fa-bounce"  /></a></div>)}
                        {!isShown && (<div><a href="https://www.youtube.com/watch?v=ALe5D4jcnQs"> <PlayBtn size={28}/></a>&emsp;<a href="https://github.com/ecmcclain/LemmeShowYouASong/blob/main/README.md"> <Github size={28} /></a></div>)}
                        
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
                    <a href="https://github.com/ecmcclain/Portfolio"><Card.Img variant="top" src={Portfolio} /></a>
                    <Card.Body>
                        <Card.Text>
                            Meta, I know. A living portfolio of my work so far. This project is hosted on GitHub pages and is frequently updated with my new work.  
                        </Card.Text>
                        <footer className="footer">
                            REACT | BOOTSTRAP
                        </footer><br></br>
                        {isShown && (<a href="https://github.com/ecmcclain/Portfolio"> <Github size={28} style={{
                            animationIterationCount: "1" }}className="fa-bounce" /></a>)}
                        {!isShown && (<a href="https://github.com/ecmcclain/Portfolio"> <Github size={28} /></a>)}
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Card>
        </section>
    )
}

export default Projects
