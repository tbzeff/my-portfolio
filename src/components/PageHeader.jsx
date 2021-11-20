import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import selfie from '../res/profile_pic3.jpg'
import Card from 'react-bootstrap/Card';

const PageHeader = () => (
    <Card style={{ width: '700px'}}>
        <Card.Img variant="top" src={selfie} style={{ width: '250px'}} />
        <Card.Body>
            <Card.Title>Taylor Bleizeffer</Card.Title>
            <Card.Text>
            A recent Computer Science graduate from the University of Wyoming who is deeply curious about the inner-workings of the world. With an academic background in computation and research, and personal background in music and entertainment, I'm always ready to approach problems with an open mind.
            </Card.Text>
        </Card.Body>
    </Card>
)

export default PageHeader;