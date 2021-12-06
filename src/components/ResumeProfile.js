import React from 'react';

import { Card } from 'react-bootstrap';

const ResumeProfile = () => (
    <Card className="text-light bg-secondary" style={{ width: '700px' }}>
        <Card.Title>Profile</Card.Title>
        <Card.Body>
            <Card.Text>
            I am a curious person and a deep, analytical thinker. This allows me to fully understand problems and
            see them from many different angles to arrive at proper solutions. I value creativity and enjoy hobbies
            such as playing the guitar and bass, and photography. In the workplace, I strive to create an
            environment that is both productive and enjoyable by keeping a positive attitude. I recently graduated
            from the University of Wyoming with a Bachelor of Engineering in Computer Science (December,
            2020).
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ResumeProfile;