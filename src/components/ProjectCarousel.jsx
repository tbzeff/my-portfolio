import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import senior_thumb from '../res/proj_preview1.JPG';
import elem_auto_thumb from '../res/proj_preview3.JPG';
import memory_thumb from '../res/proj_preview4.JPG';
import codewars_thumb from '../res/proj_preview5.png';
import garden_thumb from '../res/androidlogo.jpg';
import boop_thumb from '../res/project_preview6.JPG';
import fata_thumb from '../res/proj_preview2.webp';

import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from './ProjectCard';

const ProjectCarousel = (props) => (
    <Carousel>
       <Carousel.Item>
           <ProjectCard title="Senior Project" href="https://github.com/mckade/wfcm" img={senior_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Elementary Cellular Automata console program" href="https://github.com/T-Factorial/Haskell-Elementary-Automata" img={elem_auto_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Simple Memory Game" href="/MemoryGame/main.html" img={memory_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Codewars Profile" href="https://www.codewars.com/users/T-Factorial" img={codewars_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Garden Tracker Android App (W.I.P)" href="https://github.com/tbzeff/GardenTracker" img={garden_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="The Boop Board (works best in Firefox)" href="https://theboopboard.com" img={boop_thumb} />
       </Carousel.Item>
       <Carousel.Item>
           <ProjectCard title="Fathom All the Animals debut EP - To Kill a Songbird" href="https://open.spotify.com/album/078ew3gL8BLLpPopEx360I" img={fata_thumb} />
       </Carousel.Item>
    </Carousel>
)

export default ProjectCarousel;