import React from 'react';

import '../styles/Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Container, Col, Row,
} from 'react-bootstrap';
import ResumeTitle from '../components/ResumeTitle';
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
};

const Resume = () => (

    <Container className="bg-dark" style={containerstyle} fluid>
        <Col className="list-box m-auto col-md-5">
            <Row className="mb-3 mt-3 m-auto" style={titlestyle}><ResumeTitle /></Row>            
            <Row className="mb-3 m-auto"><ResumeSkills /></Row>            
            <Row className="mb-3 m-auto"><Education /></Row>             
            <Row className="mb-3 m-auto"><PastEmployment /></Row>
            <Row className="mb-3 m-auto"><Programs /></Row>
        </Col>
    </Container>
  
)

export default Resume;