import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Card,
    ListGroup
} from 'react-bootstrap';

const Education = () => (
    <Card className="info-box ctext csecondary border resume-card-custom">
        <Card.Title className="mt-3 ms-3 text-underline ctext"><strong>Education</strong></Card.Title>
        <Card.Body>
            <ListGroup>
                <ListGroup.Item className="csecondary border-0">
                    <Card className="ctext csecondary border-0">
                        <Card.Title><strong>University of Wyoming - Laramie, WY</strong></Card.Title>
                        <Card.Body>
                            <Card.Text >
                            Bachelor of Engineering in Computer Science (2020), 3.0 GPA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            
                <ListGroup.Item className="csecondary border-0">
                    <Card className="ctext csecondary border-0">
                        <Card.Title><strong>Casper College - Casper, WY</strong></Card.Title>
                        <Card.Body>
                            <Card.Text>
                            Associate of Engineering in Computer Science (2017), 3.0 GPA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>

                <ListGroup.Item className="csecondary border-0">
                    <Card className="ctext csecondary border-0">
                        <Card.Title><strong>Kelly Walsh High School - Casper, WY</strong></Card.Title>
                        <Card.Body>
                            <Card.Text>
                            (Graduated 2014), 3.0 GPA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
)

export default Education;