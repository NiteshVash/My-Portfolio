import React from 'react';
import './Projects.css';
import Cnvtr from '../../assests/Cnvtr.png';
import Clone2 from '../../assests/Clone2.png';
import Project from '../../assests/Project.png';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projectintro">
        <h1 className="projectTitle">What I do</h1>
        <p className="projectDescription1">
          I am a skilled and passionate web designer, creating user-friendly
          websites. I have a strong understanding of design and a keen eye for
          detail. I am proficient in HTML, CSS, and JavaScript, as well as
          design software like Adobe Photoshop and Illustrator.
        </p>
      </div> 
      <div className="projectsContainer">
        <a href="https://currency-converter-mu-five.vercel.app/" rel="noopener noreferrer">
          <div className="projectContainer2">
            <img src={Cnvtr} alt="project1" className="projectImg" />
            <div className="projectDiscription">
              <h3 className="projectdiscriptionTitle">Currency Converter</h3>
              <p className="projectDescription">
                This Converter was created by me for converting currency , i will use latest api for it .
              </p>
            </div>
          </div>
        </a>
        <div className="projectContainer2">
          <img src={Clone2} alt="project1" className="projectImg" />
          <div className="projectDiscription">
            <h3 className="projectdiscriptionTitle">Amazon Clone</h3>
            <p className="projectDescription">
              This was my first clone of Amazon, which inspired me to build
              user-friendly websites.
            </p>
          </div>
        </div>
        <div className="projectContainer2">
          <img src={Project} alt="project1" className="projectImg" />
          <div className="projectDiscription">
            <h3 className="projectdiscriptionTitle">Portfolio</h3>
            <p className="projectDescription">
              This is my own portfolio created by me. It contains details about
              my work and projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
