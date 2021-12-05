import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Card,
    ListGroup
} from 'react-bootstrap';

const Education = () => {
    <ListGroup>
        <ListGroup.Item>
            <Card>
                <Card.Title>University of Wyoming - Laramie, WY</Card.Title>
                <Card.Body>
                    <Card.Text>
                    Bachelor of Engineering in Computer Science (2020), 3.0 GPA
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    
        <ListGroup.Item>
            <Card>
                <Card.Title>Casper College - Casper, WY</Card.Title>
                <Card.Body>
                    <Card.Text>
                    Associate of Engineering in Computer Science (2017), 3.0 GPA
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>

        <ListGroup.Item>
            <Card>
                <Card.Title>Kelly Walsh High School - Casper, WY</Card.Title>
                <Card.Body>
                    <Card.Text>
                    (Graduated 2014), 3.0 GPA
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    </ListGroup>
}

export default Education;