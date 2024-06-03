import '../styles/About.css'
// import { GoMarkGithub } from 'react-icons/go';
// import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
// import { Icon } from '@iconify/react';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';


const About = () => {
    return (
        <section id="about">
                <Row>
                    <Col xs={{span: 12}} 
                        sm={{span: 12 }} 
                        md={{span: 12}} 
                        l={{span: 12}} 
                        xl={{span: 12}}>
                        <Card>
                            <Card.Header as="h2">About Me</Card.Header>
                                <Card>
                                <Card.Text>
                                    I am an Applied Math major-turned-developer based in New York City with a passion for open source projects, 
                                    data visualization, and learning new technologies and frameworks. <br></br><br></br>
                                    
                                    During and after graduating from Northwestern University with a BS in Applied Math and a concentration in Optimization, 
                                    I worked for nearly four years at the NYC-based nonprofit fundraising and development consulting firm Koszyn & Company. 
                                    Motivated my interests in data analysis, science communication, and problem solving I completed an accelerated full-stack 
                                    Software Engineering Program at Hackbright Academy. <br></br><br></br>
                                                                        
                                    Bolstered by my years in nonprofit development, I am interested in projects prioritizing social change, open-access information, 
                                    and responsible AI. <br></br><br></br>

                                    {/* I am an incoming Software Engineering Intern at <a href='https://www.newmusesproject.com/about'>New Muses Project</a>, a DEI-centered classical music organization, promoting justice 
                                    and curiosity through performance, education, and scholarship. <br></br><br></br> */}

                                    I have two cats and a dog—who is the charming cursor for this portfolio. 

                                    While you're here, check out of my current projects and technologies.<br></br><br></br>

                                </Card.Text>
                                </Card>
                        </Card>
                    </Col>
                </Row>
        </section>
    )
}

export default About



