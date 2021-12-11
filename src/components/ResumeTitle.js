import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const ResumeTitle = () => (
    <Card className="m-auto text-light bg-secondary border" style={{ borderRadius: '12px' }}>
        <Card.Title className="mt-3 m-auto text-center"><strong>Taylor Bleizeffer</strong></Card.Title>
        <Card.Body className="mb-3 m-auto">
            <Card.Text className="text-center">
            Software Engineer & Musician
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ResumeTitle;