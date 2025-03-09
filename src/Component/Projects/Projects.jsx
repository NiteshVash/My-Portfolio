import React from 'react';
import './Projects.css';
import Cnvtr from '../../assests/Cnvtr.png';
import Clone2 from '../../assests/Clone2.png';
import Todolist from '../../assests/Todolist.png';

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
              It allows users to convert currencies in real-time. It fetches the latest exchange rates from an API and provides an intuitive interface for users to input amounts and select currencies for conversion.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="projectContainer2">
            <img src={Todolist} alt="project1" className="projectImg" />
            <div className="projectDiscription">
              <h3 className="projectdiscriptionTitle">TodoList</h3>
              <p className="projectDescription">
                Todolist helps users keep track of their tasks. Users can add, delete, and mark tasks as complete. The application is built with React and provides a clean and responsive user interface.
              </p>
            </div>
          </div>
        </a>
        <a href="">
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
        </a>
      </div>
    </section>
  );
}

export default Projects;
