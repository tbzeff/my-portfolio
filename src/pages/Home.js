import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import selfie from '../components/res/profile_pic4.JPG';
import PageHeader from '../components/PageHeader';
import ContactLinks from '../components/ContactLinks';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => (
    <Container className="cprimary" fluid>
        <Col className="m-auto col-md-6">
            
            <Row>
                <Container className="d-flex justify-content-evenly mt-3 card-custom">
                    <img className="img-fluid" src={selfie} alt="Portrait of Taylor Bleizeffer"/>
                </Container>
            </Row>
            <Row><ContactLinks /></Row>
            <Row><PageHeader /></Row>
            <Row><ProjectCarousel /></Row>
        </Col>
    </Container>
)

export default Home;