import '../styles/Projects.scss';

import React from 'react';

export default function Projects(props) {
  const projects = [
    {
      id: 0,
      name: 'Formly',
      link: 'http://formly-admin.netlify.com',
      description:
        'A web application for form customization and online surveys',
      image: require('../assets/images/projectFormly.png'),
      stacks: [
        'React',
        'Flow',
        'Storybook',
        'SCSS',
        'Jest',
        'Enzyme',
        'Node.js',
        'Express.js',
        'Mongoose',
        'Mocha',
        'Chai',
        'Sinon',
        'Heroku',
        'Netlify'
      ],
      addTraffic: () =>
        fetch('https://web-traffic-tracking.herokuapp.com/api/Formly', {
          method: 'POST'
        })
    },
    {
      id: 1,
      name: 'Todo-web',
      link: 'https://todo-web.netlify.com/',
      description: 'A todo web application',
      image: require('../assets/images/projectTodo.png'),
      stacks: ['React', 'HTML', 'SCSS', 'Bootstrap', 'Netlify']
    },
    {
      id: 2,
      name: 'Flashcard-backend',
      link: 'https://github.com/ngocdh236/flashcard-backend',
      description: 'An API for flashcard-web application',
      image: require('../assets/images/projectFlashBackend.png'),
      stacks: ['Node.js', 'Express.js', 'Mongoose', 'Heroku'],
      addTraffic: () =>
        fetch(
          'https://web-traffic-tracking.herokuapp.com/api/Flashcard-backend',
          {
            method: 'POST'
          }
        )
    },
    {
      id: 8,
      name: 'Flashcard-web (in progress)',
      link: 'https://github.com/ngocdh236/flashcard-web',
      description: 'A flashcard web application',
      image: require('../assets/images/projectFlashWeb.png'),
      stacks: ['React', 'HTML', 'SCSS', 'Bootstrap', 'Zeit']
    },
    {
      id: 3,
      name: 'HSL routes',
      link: 'https://gogocar-assignment.now.sh/',
      description: "A web application for querying routes from HSL's APIs",
      image: require('../assets/images/projectGogo.png'),
      stacks: ['React', 'React-google-maps', 'Apollo Client', 'Zeit'],
      addTraffic: () =>
        fetch('https://web-traffic-tracking.herokuapp.com/api/Gogocar', {
          method: 'POST'
        })
    },
    {
      id: 4,
      name: 'Text analyzer',
      link: 'https://github.com/ngocdh236/DREAMBROKER-TheProgrammingAssignment',
      description: 'An endpoint to analyze text',
      image: require('../assets/images/projectDREAM.png'),
      stacks: ['Node.js', 'Express.js', 'Heroku', 'Mocha', 'Chai'],
      addTraffic: () =>
        fetch('https://web-traffic-tracking.herokuapp.com/api/DREAMBROKER', {
          method: 'POST'
        })
    },
    {
      id: 5,
      name: 'SoundscapeMixer',
      link: 'https://github.com/Metropolia-Soundscape/soundscape-mixer',
      description:
        'An iOS application that can be used to create soundscapes from existing sound libraries, used in workshops and museums for research purpose',
      image: require('../assets/images/projectSoundscape.png'),
      stacks: ['iOS', 'Swift', 'Realm'],
      addTraffic: () =>
        fetch(
          'https://web-traffic-tracking.herokuapp.com/api/SoundscapeMixer',
          {
            method: 'POST'
          }
        )
    },
    {
      id: 6,
      name: 'RouteMeNow',
      link:
        'https://bitbucket.org/duc_thinh_vo/route-me-now-android/src/master/',
      description:
        "An Android application for journey planner using HSL's APIs",
      image: require('../assets/images/projectRoute.png'),
      stacks: ['Android', 'Kotlin'],
      addTraffic: () =>
        fetch('https://web-traffic-tracking.herokuapp.com/api/RouteMeNow', {
          method: 'POST'
        })
    },
    {
      id: 7,
      name: 'RECYCLER',
      link: 'https://github.com/ahlstronomi/RECYCLER',
      description:
        'An iOS application that provides recycling information for people living in Finland',
      image: require('../assets/images/projectRecycler.png'),
      stacks: ['iOS', 'Swift'],
      addTraffic: () =>
        fetch('https://web-traffic-tracking.herokuapp.com/api/RECYCLER', {
          method: 'POST'
        })
    },
    {
      id: 8,
      name: 'LeafLoad',
      link: 'https://github.com/ngocdh236/LeafLoad',
      description:
        'A social media platform for environment protection related topics',
      image: require('../assets/images/projectLeafLoad.png'),
      stacks: ['Angular', 'Ionic'],
      addTraffic: () =>
        fetch('https://web-traffic-tracking.herokuapp.com/api/LeafLoad', {
          method: 'POST'
        })
    }
  ];

  return (
    <div ref={props.reference} className="Projects p-5">
      <h2>Projects</h2>
      <div className="d-flex flex-wrap justify-content-between">
        {projects.map(project => (
          <a
            className="project-card mt-4"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            onClick={project.addTraffic ? project.addTraffic : null}
          >
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <img
              style={{ width: '100%', marginBottom: '30px' }}
              src={project.image}
              alt={project.name}
            ></img>
            <div>
              {project.stacks.map(element => (
                <span key={element}>{`${element} . `}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
