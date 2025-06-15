import React from 'react';

import { Card, Container, Row, Col, Badge } from 'react-bootstrap';

const ResumeSkills = () => (
    <Card className="info-box ctext csecondary border resume-card-custom">
        <Card.Title className="mt-3 ms-3 text-underline ctext"><strong>Skills</strong></Card.Title>
        <Card.Body>
            <Container>
                <Row>
                    <Col style={{ margin: '5px'}}>
                        <Row><Badge className="mb-3 caccent ctext" pill>C++</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Java</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>HTML</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>SQL</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>C#</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Python</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Networking & Network Configuration</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Microsoft .NET</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Microsoft Office</Badge></Row>
                    </Col>
                    <Col style={{ margin: '5px'}}>
                        <Row><Badge className="mb-3 caccent ctext" pill>CSS</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>JavaScript</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Android Development</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Kotlin</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Haskell</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Git/Version Control</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>DAWs (Digital Audio Workstations</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>ChatGPT</Badge></Row>
                        <Row><Badge className="mb-3 caccent ctext" pill>Bubble.io</Badge></Row>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
)

export default ResumeSkills;