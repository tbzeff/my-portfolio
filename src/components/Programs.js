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
                <Card.Title><strong>Cultivating Next Generation Software Engineering Researchers REU Program</strong></Card.Title>
                <Card.Body>
                    <Card.Text>
                    Rochester Institute ofTechnology – Rochester, NY. 2019
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    
        <ListGroup.Item className="bg-secondary" style={{ width: '700px' }}>
            <Card className="text-light bg-secondary">
                <Card.Title><strong>School of Energy Resources Summer Camp</strong></Card.Title>
                <Card.Body>
                    <Card.Text>
                    University of Wyoming – Laramie, WY. 2012 and 2013
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>

        <ListGroup.Item className="bg-secondary" style={{ width: '700px' }}>
            <Card className="text-light bg-secondary">
                <Card.Title><strong>Awakening Summer Internship</strong></Card.Title>
                <Card.Body>
                    <Card.Text>
                    Antioch Church – Overland Park, KS. 2011 and 2012
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    </ListGroup>
)

export default Education;