import React from 'react';

import { Card, Container, Row, Col, Badge } from 'react-bootstrap';

const ResumeSkills = () => (
    <Card className="info-box text-light bg-secondary border card-custom">
        <Card.Title><strong>Skills</strong></Card.Title>
        <Card.Body>
            <Container>
                <Row>
                    <Col style={{ margin: '5px'}}>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>C++</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Java</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>HTML</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>SQL</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>C#</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Python</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Networking & Network Configuration</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Microsoft .NET</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Microsoft Office</Badge></Row>
                    </Col>
                    <Col style={{ margin: '5px'}}>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>CSS</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>JavaScript</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Android Development</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Kotlin</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Haskell</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>Git/Version Control</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>DAWs (Digital Audio Workstations</Badge></Row>
                        <Row><Badge pill bg="dark" style={{ margin: '5px' }}>ChatGPT</Badge></Row>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
)

export default ResumeSkills;