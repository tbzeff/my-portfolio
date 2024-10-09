import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResumeTitle = () => {

    const [hover1,setHover1] = React.useState(false);
    const [hover2,setHover2] = React.useState(false);
    const [hover3,setHover3] = React.useState(false);

    const itemclass1 = "m-auto";
    const itemclass2 = "m-auto bg-light";

    let item1, item2, item3 = "";

    if (hover1) {
        item1 = itemclass2
    }
    else {
        item1 = itemclass1
    }

    if (hover2) {
        item2 = itemclass2
    }
    else {
        item2 = itemclass1
    }

    if (hover3) {
        item3 = itemclass2
    }
    else {
        item3 = itemclass1
    }

    return (
    <Card className="m-auto text-light bg-secondary resume-card-custom border">
        <Card.Title className="mt-3 m-auto text-center"><strong>Taylor Bleizeffer</strong></Card.Title>
        <Card.Body className="mb-3 m-auto">
            <Card.Text className="text-center">Software Engineer</Card.Text>
            <Card.Text className="text-center">
                <Link 
                    className={item1 + " link-dark resume-card-custom hover-effect"}
                    onMouseOver={ () => setHover1(true) }
                    onMouseOut={ () => setHover1(false) } 
                    to="/" ><strong>Website Home</strong>
                </Link>
                <br />
                <a 
                    className={item2 + " link-dark resume-card-custom hover-effect"}
                    href="mailto:taylorbleizeffer@gmail.com" 
                    rel="noreferrer noopener" 
                    target="_blank"
                    onMouseOver={ () => setHover2(true) }
                    onMouseOut={ () => setHover2(false) }>
                        <strong>E-mail</strong>
                </a>
                <br />
                <a 
                    className={item3 + " link-dark resume-card-custom hover-effect"}
                    href="https://www.linkedin.com/in/taylor-bleizeffer/" 
                    rel="noreferrer noopener" 
                    target="_blank"
                    onMouseOver={ () => setHover3(true) }
                    onMouseOut={ () => setHover3(false) }>
                        <strong>LinkedIn</strong>
                </a>
            </Card.Text>            
        </Card.Body>
    </Card>
    )
}

export default ResumeTitle;