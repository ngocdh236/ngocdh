import React, { useRef, useEffect } from 'react';

import './App.scss';

import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop + window.innerHeight - 60,
      behavior: 'smooth'
    });

  const scrollToHead = ref =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });

  const scrollToHeader = () => scrollToHead(headerRef);
  const scrollToProjects = () => scrollToRef(projectsRef);
  const scrollToSkills = () => scrollToRef(skillsRef);
  const scrollToExperience = () => scrollToRef(experienceRef);
  const scrollToEducation = () => scrollToRef(educationRef);

  useEffect(() => {
    fetch('https://web-traffic-tracking.herokuapp.com/api/ngocdh', {
      method: 'POST'
    });
  }, []);

  return (
    <div className="App">
      <Nav
        scrollToHeader={scrollToHeader}
        scrollToProjects={scrollToProjects}
        scrollToSkills={scrollToSkills}
        scrollToExperience={scrollToExperience}
        scrollToEducation={scrollToEducation}
      />
      <Header reference={headerRef} />}
      <div
        style={{
          top: window.innerHeight,
          position: 'absolute',
          background: 'white'
        }}
      >
        <Projects reference={projectsRef} />
        <Skills reference={skillsRef} />
        <Experience reference={experienceRef} />
        <Education reference={educationRef} />

        <div className="contact">
          <div className="text-background"></div>
          <div className="text">
            <a href="mailto:ngocdh236@gmail.com">ngocdh236@gmail.com</a>
            <br />
            <br />
            <a href="https://github.com/ngocdh236" target="blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
