import React from 'react';

import '../styles/Education.scss';

export default function Education(props) {
  const education = [
    {
      id: 0,
      school: 'Metropolia University Of Applied Sciences',
      degreeTitle: 'Bachelor of Engineering',
      degreeProgram: 'Information Technology',
      major: 'Mobile Solutions',
      time: 'August 2016 - present'
    }
  ];
  return (
    <div ref={props.reference} className='Education container mt-5 pb-5'>
      <h1>Education</h1>

      {education.map(element => (
        <div
          key={element.id}
          className='d-flex flex-column flex-md-row justify-content-between mb-5'
        >
          <div>
            <h3>{element.school}</h3>
            <ul>
              <li>{element.degreeTitle}</li>
              <li>{element.degreeProgram}</li>
              <li>{element.major}</li>
            </ul>
          </div>

          <span className='text-md-right text-time'>{element.time}</span>
        </div>
      ))}
    </div>
  );
}
