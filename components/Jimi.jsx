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

    const [isShown, setIsShown] = useState(false);

    const [pic, setPic] = useState(getPic())

    const pics = useRef(null)

    function getPic(){
        return JimiPics.jimiPics.dev[(Math.floor(Math.random()*((JimiPics.jimiPics.dev.length))))]
    }

    function handleOnClick(){
        const random_pic = getPic()
        setPic(random_pic)
        pics.current?.scrollIntoView({behavior: "smooth"})
    }   

    return (
        <section id="jimi">
            <img src={JimiBG} className='background' />           
            <Container fluid>
            <Row className='jimiRow'>
                <Col xs={{span: 12, order: 2}} 
                    sm={{span: 12, order:2 }} 
                    md={{span: 6, order:1 }} 
                    l={{span: 6, order: 1 }} 
                    xl={{span: 6, order: 1 }}
                    xxl={{span: 4, order: 1 }}
                    style={{
                        textAlign: "center"}}
                        className='jimiCol'>
                    <Card className='jimiCard'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                            <Card.Text>
                                <h2>Jimi Hendrix</h2> is a four-year-old former biomedical research Beagle.
                                Since his retirement from science, he has enjoyed cuddling, birdwatching, and eating any and all food that comes into his sightline. <br></br><br></br>
                                Because he is highly revered in his community, his image is the cursor for this website. 
                                Please enjoy these pictures of him doing one of his favorite activities—sitting! 
                            </Card.Text>
                            {isShown && (<button type="button" className='jimiButton b-bounce' onClick={handleOnClick}>
                                More Jimi!
                            </button>)}
                            {!isShown && (<button type="button" className='jimiButton' onClick={handleOnClick}>
                                More Jimi!
                            </button>)}
                    </Card>
                </Col>
                <Col xs={{span: 12, order:1}} 
                        sm={{span: 12, order:1 }} 
                        md={{span: 6, order:2 }} 
                        l={{span: 6, order:2 }} 
                        xl={{span: 6, order:2 }}
                        xxl={{span: 4, order: 2 }}
                        style={{
                        textAlign: "center",
                        alignContent: "center"}}
                        className='jimiCol'>
                    <Card className='jimiCard' id='jimiBG' >
                    <figure class="card__thumbnail">
                        <img src={pic} className='Jimi' /> 
                    </figure>
                    </Card>
                </Col>
            </Row>
            </Container>              

            <div className="images">{one}{two}{three}{four}{five}{six}{seven}{eight}{nine}{ten}</div>

        </section>
    )
}

export default Jimi