import React from 'react';
import './Projects.css';
import Cnvtr from '../../assests/Cnvtr.png';
import Clone2 from '../../assests/Clone2.png';
import Todolist from '../../assests/Todolist.png';

function Projects() {
  const projects = [
    {
      title: "Currency Converter",
      description: "It allows users to convert currencies in real-time. It fetches the latest exchange rates from an API and provides an intuitive interface for users to input amounts and select currencies for conversion.",
      image: Cnvtr,
      link: "https://currency-converter-mu-five.vercel.app/"
    },
    {
      title: "TodoList",
      description: "Todolist helps users keep track of their tasks. Users can add, delete, and mark tasks as complete. The application is built with React and provides a clean and responsive user interface.",
      image: Todolist,
      link: ""
    },
    {
      title: "Amazon Clone",
      description: "This project is a clone of the Amazon website, replicating its core functionalities such as product listings, user authentication, and a shopping cart. It is built using React and Firebase for the backend.",
      image: Clone2,
      link: ""
    }
  ];

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
        {projects.map((project, index) => (
          <a key={index} href={project.link} rel="noopener noreferrer">
            <div className="projectContainer2">
              <img src={project.image} alt={project.title} className="projectImg" />
              <div className="projectDiscription">
                <h3 className="projectdiscriptionTitle">{project.title}</h3>
                <p className="projectDescription">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}

      </div>
    </section>
  );
}

export default Projects;
