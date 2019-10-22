import React from 'react';

import '../styles/Education.scss';

export default function Education(props) {
  const education = [
    {
      id: 0,
      school: 'Metropolia University Of Applied Sciences',
      degreeTitle: 'B.E',
      degreeProgram: 'Information Technology',
      major: 'Mobile Solutions',
      time: 'August 2016 - present'
    }
  ];

  return (
    <div ref={props.reference} className="Education container mt-5 pb-5">
      <h1>Education</h1>

      {education.map(element => (
        <div
          key={element.id}
          className="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div>
            <h3>
              {element.degreeTitle} in {element.degreeProgram}, Major in{' '}
              {element.major}
            </h3>
            <p className="lead">{element.school} </p>
          </div>

          <span className="text-md-right text-time">{element.time}</span>
        </div>
      ))}
    </div>
  );
}
