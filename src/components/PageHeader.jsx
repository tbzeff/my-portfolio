import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import selfie from '../res/profile_pic3.jpg'
import Card from 'react-bootstrap/Card';

const PageHeader = () => (    
    <Card className="m-auto mb-3 bg-secondary border" style={{ width: '700px' }}>
        <Card.Img className="m-auto mt-3 border" variant="top" src={selfie} style={{ width: '250px'}} />
        <Card.Body>
            <Card.Title variant="center">Taylor Bleizeffer</Card.Title>
            <Card.Text>
            A recent Computer Science graduate from the University of Wyoming who is deeply curious about the inner-workings of the world. With an academic background in computation and research, and personal background in music and entertainment, I'm always ready to approach problems with an open mind.
            </Card.Text>
        </Card.Body>
    </Card>
)

export default PageHeader;