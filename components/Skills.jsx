import '../styles/Skills.css'
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { DiCss3Full, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiJavascript, SiFlask, SiPostgresql, SiC, SiSqlalchemy, SiJinja, SiJquery} from 'react-icons/si';
import { FaPython } from 'react-icons/fa'

const Skills = () => {
    return (
        <section id="skills">
            <Card>
                <Card.Header as="h2">Technologies</Card.Header>
                <Col>
                    <Row>
                        <Card>
                            <Card.Header as="h5">Languages</Card.Header>
                            <Card.Body className='tech'>
                                <div><SiJavascript size={42}/> JavaScript</div>
                                <div><DiCss3Full size={42}/> CSS</div>
                                <div><DiHtml5 size={42}/> HTML5</div>
                                <div><FaPython size={42} /> Python</div>
                                <div><SiC size={42} /> C</div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header as="h5">Frontend</Card.Header>
                            <Card.Body className='tech'>
                                <div><DiReact size={42}/> React</div>
                                <div><SiJinja size={42}/> Jinja2</div>
                                <div><SiJquery size={42}/> JQuery</div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header as="h5">Backend & Databases</Card.Header>
                            <Card.Body className='tech'>
                                <div><SiFlask size={42}/> Flask</div>
                                <div><SiPostgresql size={42}/> PostgresSQL</div>
                                <div><DiNodejsSmall size={42}/> Node.js</div>
                                <div><SiSqlalchemy size={42}/> SQL Alchemy</div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Card>
        </section>
    )
}

export default Skills
