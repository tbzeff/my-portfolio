import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageHeader = () => (    
    <Container className="m-auto d-flex justify-content-evenly mb-3 bg-secondary border" style={{ width: '700px' }}>
   
    
        <Row>

            <Col>
                <Card className="m-auto p-auto bg-secondary border-0">
                    <Card.Body className="m-auto">
                        <Card.Title className="text-center" variant="center"><strong>Taylor Bleizeffer</strong></Card.Title> 
                        <Card.Text className="fw-bold">
                        A recent Computer Science graduate from the University of Wyoming who is deeply curious about the inner-workings of the world. With an academic background in computation and research, and personal background in music and entertainment, I'm always ready to approach problems with an open mind.
                        </Card.Text>
                    </Card.Body>
                </Card>    
            </Col>
        </Row>
    
           
    </Container>
)

export default PageHeader;