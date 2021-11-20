import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => (
    <Card style={{ width: '300px', height: '300px' }}>
        <Card.Img style={{ width: '300px', height: '300px' }} src={props.img} />
        <Card.ImgOverlay >
            <Card.Title>
                <Card.Link
                    href={props.href}>{props.title}
                </Card.Link>
            </Card.Title>
        </Card.ImgOverlay>
    </Card>
)

export default ProjectCard;