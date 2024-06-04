import LilyResume from "../assets/McClain_Resume.pdf";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';

const Resume = () => {
    return (
        <section id="resume">
            <Row>
                    <Col xs={{span: 12}} 
                        sm={{span: 12 }} 
                        md={{span: 12}} 
                        l={{span: 12}} 
                        xl={{span: 12}}
                        xxl={{span: 12}}>
                <Card>
                <Card.Header as="h2">Resume</Card.Header>
                <div className="content-container">
                    <object type="application/pdf"
                            data={LilyResume}
                            style={{width:"100%",
                                    height: "100vh",
                                    marginBottom: "3em",
                                    position: "relative"}}>
                    </object>
                </div>
                </Card>
            </Col>
            </Row>
        </section>
    )
}

export default Resume