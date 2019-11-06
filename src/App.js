import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';

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

function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

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
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <Nav
              {...props}
              scrollToHeader={scrollToHeader}
              scrollToProjects={scrollToProjects}
              scrollToSkills={scrollToSkills}
              scrollToExperience={scrollToExperience}
              scrollToEducation={scrollToEducation}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => <Header reference={headerRef} />}
        />

        <div style={{ top: window.innerHeight, position: 'absolute' }}>
          <Route
            exact
            path="/"
            render={props => <Projects reference={projectsRef} />}
          />
          <Route
            exact
            path="/"
            render={props => <Skills reference={skillsRef} />}
          />
          <Route
            exact
            path="/"
            render={props => <Experience reference={experienceRef} />}
          />
          <Route
            exact
            path="/"
            render={props => <Education reference={educationRef} />}
          />
        </div>

        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
