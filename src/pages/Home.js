import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import selfie from '../components/res/profile_pic4.JPG';
import PageHeader from '../components/PageHeader';
import ContactLinks from '../components/ContactLinks';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => (
    <Container className="bg-dark" style={{ height: '150vh' }} fluid>
        <Col className="m-auto">
            
            <Row>
                <Container className="d-flex justify-content-evenly" style={{ width: '700px' }}>
                    <img src={selfie} style={{ width: '700px' }} />
                </Container>
            </Row>
            <Row><ContactLinks /></Row>
            <Row><PageHeader /></Row>
            <Row><ProjectCarousel /></Row>
        </Col>
    </Container>
)

export default Home;