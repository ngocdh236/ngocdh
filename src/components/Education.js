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
    <div ref={props.reference} className="Education p-5">
      <h2>Education</h2>

      {education.map(element => (
        <div
          key={element.id}
          className="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div>
            <h5>
              {element.degreeTitle} in {element.degreeProgram}, Major in{' '}
              {element.major}
            </h5>
            <p className="lead">{element.school} </p>
          </div>

          <span className="text-md-right text-time">{element.time}</span>
        </div>
      ))}
    </div>
  );
}
