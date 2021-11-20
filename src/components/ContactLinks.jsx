import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../res/taylorbleizeffer-resume.pdf';
import Nav from 'react-bootstrap/Nav';

const ContactLinks = () => (
    <Nav>
        <Nav.Item >
            <Nav.Link href={resume} >
                Resume
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="mailto:taylorbleizeffer@gmail.com" >
                Email
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="https://www.linkedin.com/in/taylor-bleizeffer/" >
                LinkedIn
            </Nav.Link>
        </Nav.Item>
    </Nav>
)

export default ContactLinks;