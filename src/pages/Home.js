import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import ContactLinks from '../components/ContactLinks';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => (
    <Container className="bg-dark" style={{ height: '100vh' }} fluid>
        <Col className="m-auto">
            <Row><ContactLinks /></Row>
            <Row><PageHeader /></Row>
            <Row><ProjectCarousel /></Row>
            <Row>
                <Container className="bg-secondary">
                    Made using ReactJS and Bootstrap.
                </Container>
            </Row>
        </Col>
    </Container>
)

export default Home;