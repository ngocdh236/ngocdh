import React from 'react';

import '../styles/Education.scss';

export default function Education(props) {
  const education = [
    {
      id: 0,
      school: 'METROPOLIA UNIVERSITY OF APPLIED SCIENCES',
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
            <div className='mb-3'>{element.degreeTitle}</div>
            <p>
              {element.degreeProgram} - {element.major}
            </p>
          </div>

          <span className='text-md-right text-time'>{element.time}</span>
        </div>
      ))}
    </div>
  );
}
