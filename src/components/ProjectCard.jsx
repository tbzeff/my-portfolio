import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => (
    <Card style={{ width: '300px', height: '300px'}}>
        <Card.Img variant="top" src={props.img} />
        <Card.Title><Card.Link href={props.href}>{props.title}</Card.Link></Card.Title>
    </Card>
)

export default ProjectCard;