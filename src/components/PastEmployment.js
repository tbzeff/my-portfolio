import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Accordion } from 'react-bootstrap';

const PastEmployment = () => (
    <Card className="bg-secondary" style={{ width: '700px' }}>
        <Card.Title className="text-light"><strong>Past Employment</strong></Card.Title>
        <Card.Body>
            <Accordion>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>
                        <strong>Student Researcher - Rochester Institute of Technology -- “Cultivating Next Generation Software Engineers” REU; Rochester, NY – May 2019 – August 2019:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    Student researcher, served on research team working closely with mentor professor and team members
                    to plan, design and perform research; developed web scraper using Ruby to collect data for research;
                    gave weekly status updates presenting our progress, setbacks, and plan for the next week to mentor
                    professors and other research teams.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <strong>Delivery driver, Jimmy John’s; Laramie, WY – July 2017 – July 2020:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    <strong>Delivery driver, Jimmy John’s; Casper, WY – Sep 2016 – July 2017</strong> <br />
                    Customer service; food preparation; fulfill delivery orders safely; accurately and quickly; safe food
                    handling; work in team-oriented environment; answer and troubleshoot customer questions and
                    complaints.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                    <strong>Bassist, Fathom All the Animals; Denver, CO – Spring 2015 – Present:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    Teamwork; creativity; social and performance skills; marketing/advertising; managing band social
                    media presence; order and sell merchandise; money and time management; musical composition and
                    practice; travel; networking with other musicians, promoters, venues, etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                    <strong>Line server, Qdoba Mexican Grill; Casper, WY – Sep 2012 – Aug 2014, Dec 2015 – June 2016:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    Customer service; food preparation; fulfill customer orders accurately; work in team-oriented
                    environment; answer and troubleshoot customer questions/complaints; maintain knowledge of menu to
                    provide customers with accurate information and make suggestions for flavor pairings; keeping
                    restaurant clean and presentable; paying attention to details.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                    <strong>Delivery driver, Domino’s Pizza; Casper, WY – Jan 2015 – Feb 2015, Loveland CO – June 2016 –
                    Sep 2016:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    <strong>Customer service; fulfill delivery orders safely; accurately and quickly; safe food handling; work in
                    team-oriented environment; answer or troubleshoot customer questions and complaints.</strong>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                    <strong>Front Desk Clerk, C’mon Inn Hotel & Suites; Evansville, WY – June 2015 – Dec 2015:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    Customer service; maintain meticulous records of current guests (room numbers, vehicle and credit
                    card information); perform daily audit to maintain accurate guest and accounting records; make sure
                    lobby, hallways, conference rooms, etc. are clean and presentable; prepare conference rooms;
                    answer or troubleshoot guest questions and complaints; answer phones and make reservations; provide
                    guests with information about local businesses and events; create a welcoming and homely
                    environment for guests.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                    <strong>Video Technician, University of Wyoming Outreach School; Laramie, WY – Sep 2014 – June 2015:</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    Properly handle and operate classroom technology; maintain connection with off-site classrooms;
                    troubleshoot issues with devices and software (cameras, mics, computers, streaming program);
                    communicate with instructors and students to facilitate on-line lectures; display PowerPoints, videos,
                    camera angles, monitors etc. as needed by instructor and students; maintain a report of every lecture
                    (attendance, issues, events of note, general summary).
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card.Body>
    </Card>
)

export default PastEmployment;