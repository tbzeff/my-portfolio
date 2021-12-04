import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import resume from './res/taylorbleizeffer-resume.pdf';
import Nav from 'react-bootstrap/Nav';

const ContactLinks = () => {

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
        <Nav className="m-auto mb-3 mt-3 bg-secondary border" style={{ width: '400px' }}>
            <Nav.Item 
                className={item1}
                onMouseOver={ () => setHover1(true) }
                onMouseOut={ () => setHover1(false) }
            >
                <Nav.Link
                    className="link-dark" 
                    href={resume} rel="noreferrer noopener"
                    target="_blank" >
                    <strong>Resume</strong>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item 
                className={item2}
                onMouseOver={ () => setHover2(true) }
                onMouseOut={ () => setHover2(false) }
            >
                <Nav.Link 
                    className="link-dark" 
                    href="mailto:taylorbleizeffer@gmail.com" 
                    rel="noreferrer noopener" 
                    target="_blank" >
                    <strong>Email</strong>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item 
                className={item3}
                onMouseOver={ () => setHover3(true) }
                onMouseOut={ () => setHover3(false) }
            >
                <Nav.Link 
                    className="link-dark" 
                    href="https://www.linkedin.com/in/taylor-bleizeffer/" 
                    rel="noreferrer noopener" 
                    target="_blank" >
                    <strong>LinkedIn</strong>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default ContactLinks;