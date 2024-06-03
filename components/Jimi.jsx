import '../styles/Jimi.css'
import JimiPics from './JimiPics.json';
import { useState, useRef } from "react";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';


const Jimi = () => {
    const [pic, setPic] = useState(getPic())

    function getPic(){
        return JimiPics.jimiPics[(Math.floor(Math.random()*((JimiPics.jimiPics.length))))]
    }

    return (
        <section id="jimi">
            <Row>
                <Col xs={{span: 12}} 
                    sm={{span: 12 }} 
                    md={{span: 12}} 
                    l={{span: 12}} 
                    xl={{span: 12}}>
                    <Card>
                        <Card.Header as="h2">Jimi Sitting</Card.Header>
                            <Card.Body>
                                <img src={pic} className='Jimi' />
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Jimi