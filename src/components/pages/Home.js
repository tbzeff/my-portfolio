import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import PageHeader from '../PageHeader';
import ContactLinks from '../ContactLinks';
import ProjectCarousel from '../ProjectCarousel';

const Home = (props) => (
    <Container>
        <PageHeader />
        <ContactLinks />
        <ProjectCarousel />
    </Container>
)

export default Home;