import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import senior_thumb from './res/proj_preview1.jpg';
// import elem_auto_thumb from './res/proj_preview3.jpg';
import memory_thumb from './res/proj_preview4.jpg';
import codewars_thumb from './res/proj_preview5.jpg';
import fata_thumb from './res/proj_preview2.jpg';
import github_logo from './res/githublogo.png'

import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from './ProjectCard';

const ProjectCarousel = (props) => (
    <Carousel className="m-auto mb-5 bg-secondary border" style={{ borderRadius: "12px" }}>
       <Carousel.Item>
           <ProjectCard title="Taylor's GitHub" href="https://github.com/tbzeff" img={github_logo} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Senior Project: Probabilistic Music Randomizer" href="https://github.com/mckade/wfcm" img={senior_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Simple Memory Game" href="/MemoryGame/main.html" img={memory_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Codewars Profile" href="https://www.codewars.com/users/T-Factorial" img={codewars_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Fathom All the Animals - To Kill a Songbird" href="https://open.spotify.com/album/078ew3gL8BLLpPopEx360I" img={fata_thumb} />
       </Carousel.Item>
    </Carousel>
)

export default ProjectCarousel;