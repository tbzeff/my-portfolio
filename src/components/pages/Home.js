import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import PageHeader from '../PageHeader';
import ContactLinks from '../ContactLinks';
import ProjectCarousel from '../ProjectCarousel';

const Home = () => (
    <Container className="bg-dark">
        <Col className="m-auto">
            <Row><ContactLinks /></Row>
            <Row><PageHeader /></Row>
            <Row><ProjectCarousel /></Row>
        </Col>
    </Container>
)

export default Home;