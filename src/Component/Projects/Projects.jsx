import React from 'react'
import './Projects.css'
import Clone from '../../assests/Clone.png'
import Clone2 from '../../assests/Clone2.png'
import Project from '../../assests/Project.png'


function Projects() {
  return (
    < section id="projects" className="projects">
      <div className="projectintro">
        <h1 className="projectTitle">What I do </h1>
        <p className="projectDescription1">I am a Skilled and passionate web designer in creating user-friendly <br /> websites . i have a strong understanding in design and a keen eye of detail. i am proficient in HTML , CSS,<br /> and Javascript ,as well as design software such as Adobe Photoshopr and Illustrate</p>
      </div>
      <div className="projectsContainer">
        <div className="projectContainer2">
          <img src={Clone} alt="project1" className="projectImg" />
          <div className="projectDiscription">
            <h3 className="projectdiscriptionTitle">I Phone Clone </h3>
            <p className="projectDescription">This Ui is created by me for Understanding a javascript in depth with using HTML and Css </p>
          </div>
        </div>
        <div className="projectContainer2">
          <img src={Clone2} alt="project1" className="projectImg" />
          <div className="projectDiscription">
            <h3 className="projectdiscriptionTitle">Amazone Clone</h3>
            <p className="projectDescription">That was my first Clone of Amazone . thats also my inspiration to build a user-friendly websites</p>
          </div>
        </div>
        <div className="projectContainer2">
        <img src={Project} alt="project1" className="projectImg" />
          <div className="projectDiscription">
            <h3 className="projectdiscriptionTitle">Portfolio</h3>
            <p className="projectDescription">This is my own Portfolio Created by Me , here is my details About my Work and Projects .</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects