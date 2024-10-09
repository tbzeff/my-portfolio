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
    <Card className="m-auto mb-5 mt-5 card-custom bg-dark border" style={{ width: '300px', height: '300px', borderRadius: '12px' }}>
        <Card.Img className="card-custom" style={{ width: '298px', height: '225px', objectFit: 'cover', borderRadius: '12px' }} src={props.img} />
        <Card.Body className="m-auto bg-dark card-custom border" style={{width: '298px', height: '25px'}} fluid>
            <Card.Title className={"m-auto p-1 text-center hover-effect " + titleclass} style={{ borderRadius: "12px", fontSize: '16px' }} fluid>
                <Card.Link
                    className="link-dark"
                    onMouseOver={ () => setHover(true) }
                    onMouseOut={ () => setHover(false) }
                    href={props.href}
                    rel="noreferrer noopener" 
                    target="_blank">
                        {props.title}
                </Card.Link>
            </Card.Title>
        </Card.Body>
    </Card>
    )
}

export default ProjectCard;