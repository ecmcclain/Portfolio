import LilyResume from "../assets/McClain_Resume_5.27.24.pdf";
import Card from 'react-bootstrap/Card';

const Resume = () => {
    return (
        <section id="resume">
            <Card>
            <Card.Header as="h2">Resume!</Card.Header>
            <div className="content-container">
                <object type="application/pdf"
                        data={LilyResume}
                        style={{minWidth:"1000px",
                                minHeight: "1050px",
                                marginBottom: "3em"}}>
                </object>
            </div>
            </Card>
        </section>
    )
}

export default Resume