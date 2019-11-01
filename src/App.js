import React, { useRef, useEffect } from 'react';

import './App.scss';

import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

const scrollToRef = ref =>
  window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });

function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToHeader = () => scrollToRef(headerRef);
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
      <Header reference={headerRef} />
      <Projects reference={projectsRef} />
      <Skills reference={skillsRef} />
      <Experience reference={experienceRef} />
      <Education reference={educationRef} />
    </div>
  );
}

export default App;
