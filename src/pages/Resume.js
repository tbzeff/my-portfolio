import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Container, Col, Row,
} from 'react-bootstrap';
import ResumeTitle from '../components/ResumeTitle';
import ResumeProfile from '../components/ResumeProfile';
import ResumeSkills from '../components/ResumeSkills';
import Education from '../components/Education';
import PastEmployment from '../components/PastEmployment';
import Programs from '../components/Programs';

const Resume = () => (

    <Container className="bg-dark" fluid>
        <Col className="m-auto" style={{ width: '700px' }}>
            <Row className="mb-3"><ResumeTitle /></Row>            
            <Row className="mb-3"><ResumeProfile /></Row>
            <Row className="mb-3"><ResumeSkills /></Row>            
            <Row className="mb-3"><Education /></Row>             
            <Row className="mb-3"><PastEmployment /></Row>
            <Row className="mb-3"><Programs /></Row>
        </Col>
    </Container>
  
)

export default Resume;