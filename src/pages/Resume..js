import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Container, Col, Row,
    Card
} from 'react-bootstrap';
import Education from '../components/Education';
import PastEmployment from '../components/PastEmployment';
import Programs from '../components/Programs';

const Resume = () => (

    <Container>

        // Header Row
        <Row>
            <Col>
                <Card>
                    <Card.Title>Taylor Bleizeffer</Card.Title>
                    <Card.Body>
                        <Card.Text>
                        Software Engineer
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>            
        </Row>

        // Contact Row
        <Row>

        </Row>

        // "Profile" Section
        <Row>
            <Card>
                <Card.Title>Profile</Card.Title>
                <Card.Body>
                    <Card.Text>
                    I am a curious person and a deep, analytical thinker. This allows me to fully understand problems and
                    see them from many different angles to arrive at proper solutions. I value creativity and enjoy hobbies
                    such as playing the guitar and bass, and photography. In the workplace, I strive to create an
                    environment that is both productive and enjoyable by keeping a positive attitude. I recently graduated
                    from the University of Wyoming with a Bachelor of Engineering in Computer Science (December,
                    2020).
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>

        // "Skills" Section
        <Row>
            <Card>
                <Card.Title>Skills</Card.Title>
                <Card.Body>
                    <Card.Text>
                    The strengths I bring to any position include excellent communication, great problem-solving,
                    knowledge, and comfort with technology. Analytical thinking allows me to assess situations accurately,
                    create efficient plans of action, and find the tools I need to get the job done. The work I have done in
                    my Computer Science degree has prepared me for many different aspects of the field. I am comfortable
                    in the C++, Java, HTML, CSS and JavaScript programming languages. Android development in Java
                    and Kotlin, Haskell, SQLite and C# are a few more languages I’ve had experience with through my
                    studies. I gained much experience with version control using Git during my studies. I have also been
                    introduced to basic networking including basic router/switch configuration and troubleshooting. Other
                    skills include familiarity with the image editing software like Gimp, making basic 2D video games in
                    GameMaker Studio and some experience composing, recording and mixing with DAWs.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
        
        // Education Section
        <Row>
            <Education />
        </Row>

        // Past Employment ("Experience") Section
        <Row>
            <PastEmployment />
        </Row>

        // Programs Section 
        <Row>
            <Programs />
        </Row>

    </Container>
  
)

export default Resume;