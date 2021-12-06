import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const ResumeTitle = () => (
    <Card className="text-light bg-secondary" style={{ width: '700px' }}>
        <Card.Title className="m-auto text-center">Taylor Bleizeffer</Card.Title>
        <Card.Body className="m-auto">
            <Card.Text className="text-center">
            Software Engineer & Musician
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ResumeTitle;