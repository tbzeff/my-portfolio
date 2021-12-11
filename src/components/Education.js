import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Card,
    ListGroup
} from 'react-bootstrap';

const Education = () => (
    <ListGroup className="info-box" style={{ width: '700px' }}>
        <ListGroup.Item className="bg-secondary" style={{ width: '700px' }}>
            <Card className="text-light bg-secondary">
                <Card.Title><strong>University of Wyoming - Laramie, WY</strong></Card.Title>
                <Card.Body>
                    <Card.Text >
                    Bachelor of Engineering in Computer Science (2020), 3.0 GPA
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    
        <ListGroup.Item className="bg-secondary" style={{ width: '700px' }}>
            <Card className="text-light bg-secondary">
                <Card.Title><strong>Casper College - Casper, WY</strong></Card.Title>
                <Card.Body>
                    <Card.Text>
                    Associate of Engineering in Computer Science (2017), 3.0 GPA
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>

        <ListGroup.Item className="bg-secondary" style={{ width: '700px' }}>
            <Card className="text-light bg-secondary">
                <Card.Title><strong>Kelly Walsh High School - Casper, WY</strong></Card.Title>
                <Card.Body>
                    <Card.Text>
                    (Graduated 2014), 3.0 GPA
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    </ListGroup>
)

export default Education;