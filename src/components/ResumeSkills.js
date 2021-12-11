import React from 'react';

import { Card } from 'react-bootstrap';

const ResumeSkills = () => (
    <Card className="text-light bg-secondary" style={{ width: '700px' }}>
        <Card.Title><strong>Skills</strong></Card.Title>
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
)

export default ResumeSkills;