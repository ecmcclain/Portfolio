import '../styles/Jimi.css'
import JimiPics from './JimiPics.json';
import { useState, useRef } from "react";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import JimiBG from '../assets/site-bg.svg';
import one from '/assets/1.png'
import two from '/assets/2.png'
import three from '/assets/3.png'
import four from '/assets/4.png'
import five from '/assets/5.png'
import six from '/assets/6.png'
import seven from '/assets/7.png'
import eight from '/assets/8.png'
import nine from '/assets/9.png'
import ten from '/assets/10.png'


const Jimi = () => {

    const [pic, setPic] = useState(getPic())

    const pics = useRef(null)

    function getPic(){
        return JimiPics.jimiPics[(Math.floor(Math.random()*((JimiPics.jimiPics.length))))]
    }

    function handleOnClick(){
        const random_pic = getPic()
        setPic(random_pic)
        pics.current?.scrollIntoView({behavior: "smooth"})
    }   

    return (
        <section id="jimi">
            <img src={JimiBG} className='background' />
            <Row>
                    <Col xs={{span: 12, order: 2}} 
                        sm={{span: 12, order:2 }} 
                        md={{span: 4, order:1 }} 
                        l={{span: 6, order: 1 }} 
                        xl={{span: 6, order: 1 }}
                        style={{
                            textAlign: "center"}}>
                       <Card>
                        <Card.Header as="h2">Jimi Hendrix</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Jimi Hendrix is a four-year-old former biomedical research Beagle.
                                    Since retirement from his career in science, he has enjoyed cuddling,
                                    birdwatching, and eating any and all food that comes into his sightline. <br></br><br></br>
                                    Because he is highly revered in his community, he's image is the cursor for this website. 
                                    Please enjoy these pictures of him doing one of his favorite activities—sitting! 
                                </Card.Text>
                                <button  
                                type="button" 
                                onClick={handleOnClick}>
                                    More Jimi!
                                </button>
                            </Card.Body>
                    </Card>
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
                         <Card>
                            <Card.Body>
                                <img src={pic} className='Jimi' /> 
                            </Card.Body>
                    </Card> 

                    </Col>
                </Row>
            <div id="images">{one}{two}{three}{four}{five}{six}{seven}{eight}{nine}{ten}</div>

        </section>
    )
}

export default Jimi