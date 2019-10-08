import React from 'react';

import '../styles/Projects.scss';

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
        'Node.js',
        'Express.js',
        'Mongoose',
        'Heroku',
        'Zeit'
      ]
    },
    {
      id: 1,
      name: 'Todo',
      link: 'https://www.titekapps.com/',
      description: 'A todo wep application',
      image: require('../assets/images/projectTodo.png'),
      stacks: ['React', 'HTML', 'SCSS', 'Bootstrap']
    },
    {
      id: 2,
      name: 'Flashcard-backend',
      link: 'https://github.com/ngocdh236/flashcard-backend',
      description: 'An API for flashcard application',
      image: require('../assets/images/projectFlashBackend.png'),
      stacks: ['Node.js', 'Express.js', 'Mongoose', 'Heroku']
    },
    {
      id: 3,
      name: 'SoundscapeMixer',
      link: 'https://github.com/Metropolia-Soundscape/soundscape-mixer',
      description:
        'An iOS application that can be used to create soundscapes from existing sound libraries, used in workshops and museums for research purpose',
      image: require('../assets/images/projectSoundscape.png'),
      stacks: ['Swift', 'Realm']
    },
    {
      id: 4,
      name: 'RouteMeNow',
      link:
        'https://bitbucket.org/duc_thinh_vo/route-me-now-android/src/master/',
      description:
        "An Android application for journey planner using HSL's APIs",
      image: require('../assets/images/projectRoute.png'),
      stacks: ['Kotlin']
    }
  ];

  return (
    <div ref={props.reference} className='Projects container mt-5 pb-5'>
      <h1>Projects</h1>
      <div className='d-flex flex-wrap justify-content-between'>
        {projects.map(project => (
          <a
            className='project-card mt-4'
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            key={project.id}
          >
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <img
              style={{ width: '100%', marginBottom: '30px' }}
              src={project.image}
              alt='projectTodo'
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
