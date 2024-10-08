import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResumeTitle = () => (
    <Card className="m-auto text-light bg-secondary card-custom border">
        <Card.Title className="mt-3 m-auto text-center"><strong>Taylor Bleizeffer</strong></Card.Title>
        <Card.Body className="mb-3 m-auto">
            <Card.Text className="text-center">Software Engineer</Card.Text>
            <Card.Text className="text-center">
                <Link 
                    className="link-dark" 
                    to="/" ><strong>Website Home</strong>
                </Link>
                <br />
                <a 
                    className="link-dark" 
                    href="mailto:taylorbleizeffer@gmail.com" 
                    rel="noreferrer noopener" 
                    target="_blank"><strong>E-mail</strong>
                </a>
                <br />
                <a 
                    className="link-dark" 
                    href="https://www.linkedin.com/in/taylor-bleizeffer/" 
                    rel="noreferrer noopener" 
                    target="_blank"><strong>LinkedIn</strong>
                </a>
            </Card.Text>            
        </Card.Body>
    </Card>
)

export default ResumeTitle;