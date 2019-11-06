import React from 'react';

import '../styles/Experience.scss';

export default function Experience(props) {
  const experience = [
    {
      id: 0,
      title: 'Teaching Assistant',
      company: 'LENA CULTURE CENTER - IELTS, TOEIC',
      time: 'March 2015 - June 2015',
      tasks: [
        'Manage and distribute documents to students',
        "Check students' homework"
      ]
    },
    {
      id: 1,
      title: 'Junior Web Developer',
      company: 'INTEGRIFY',
      time: 'June 2019 - present',
      tasks: [
        'Back-end development (Node.js, Express.js, Mongoose)',
        'Front-end development (React, Flow, Storybook)'
      ]
    }
  ];
  return (
    <div ref={props.reference} className="Experience p-5">
      <h2>Experience</h2>

      {experience.map(element => (
        <div
          key={element.id}
          className="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div>
            <h5>{element.title}</h5>
            <div className="mb-3">{element.company}</div>
            <ul>
              {element.tasks.map(task => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>

          <span className="text-md-right text-time">{element.time}</span>
        </div>
      ))}
    </div>
  );
}
