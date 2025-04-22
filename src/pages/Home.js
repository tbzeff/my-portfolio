import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import ContactLinks from '../components/ContactLinks';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => (
    <Container className="cprimary" fluid>
        <Col className="m-auto col-md-6">
            <Row><PageHeader /></Row>
            <Row><ContactLinks /></Row>
            <Row><ProjectCarousel /></Row>
        </Col>
    </Container>
)

export default Home;