import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {

    const [hover,setHover] = React.useState(false);

    let titleclass = "";

    const itemclass1 = "m-auto bg-secondary border";
    const itemclass2 = "m-auto bg-light border";

    if (hover) {
        titleclass = itemclass2;
    }
    else {
        titleclass = itemclass1;
    }

    return (
    <Card className="m-auto mb-5 mt-5 border-0" style={{ width: '300px', height: '300px' }}>
        <Card.Img style={{ width: '300px', height: '225px' }} src={props.img} />
        <Card.Body className="bg-dark" fluid>
            <Card.Title className={titleclass} fluid>
                <Card.Link
                    className="link-dark"
                    onMouseOver={ () => setHover(true) }
                    onMouseOut={ () => setHover(false) }
                    href={props.href}>
                        {props.title}
                </Card.Link>
            </Card.Title>
        </Card.Body>
    </Card>
    )
}

export default ProjectCard;