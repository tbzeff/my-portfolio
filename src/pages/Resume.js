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

const titlestyle = {
    display: 'block',
    textAlign: 'center',
    maxWidth: '100%',
    width: '300px'
};

const containerstyle = {
    display: 'flex',
    flexDirection: 'column',
    itemsAlign: 'center',
    maxWidth: '100%'
};

const Resume = () => (

    <Container className="bg-dark" style={containerstyle}>
        <Col className="m-auto" style={{ width: '700px' }}>
            <Row className="mb-3 m-auto" style={titlestyle}><ResumeTitle /></Row>            
            <Row className="mb-3 m-auto"><ResumeProfile /></Row>
            <Row className="mb-3 m-auto"><ResumeSkills /></Row>            
            <Row className="mb-3 m-auto"><Education /></Row>             
            <Row className="mb-3 m-auto"><PastEmployment /></Row>
            <Row className="mb-3 m-auto"><Programs /></Row>
        </Col>
    </Container>
  
)

export default Resume;