import React from 'react';

import '../styles/Skills.scss';

export default function Skills(props) {
  const icons = [
    'fab fa-js-square',
    'fab fa-react',
    'fab fa-sass',
    'fab fa-css3-alt',
    'fab fa-bootstrap',
    'fab fa-html5',
    'fab fa-npm',
    'fab fa-node-js',
    'fab fa-swift',
    'fab fa-github',
    'fab fa-bitbucket'
  ];

  const skills = [
    {
      id: 0,
      title: 'Strong In',
      list: [
        'JavaScript',
        'SCSS',
        'React, Redux',
        'Node.js, Express.js, Mongoose'
      ]
    },
    { id: 1, title: 'Knowledgeable With', list: ['Design UI, UX', 'Swift'] }
  ];

  const workflow = [
    'Mobile-First, Responsive Design',
    'Maintainable, Reusable, Scalable & Testable Code',
    'Continuous Integration, Continuous Delivery',
    'Agile Development & Scrum'
  ];

  return (
    <div ref={props.reference} className='Skills container mt-5 pb-5'>
      <h1>Skills</h1>

      <ul className='list-inline dev-icons'>
        {icons.map(icon => (
          <li key={icon} className='list-inline-item'>
            <i className={icon}></i>
          </li>
        ))}
      </ul>

      <div className='d-flex my-5'>
        {skills.map(skill => (
          <div key={skill.id} className='mr-5'>
            <h4>{skill.title}</h4>
            <ul>
              {skill.list.map(element => (
                <li key={element}>{element}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h4>Workflow</h4>
      <ul className='fa-ul'>
        {workflow.map(element => (
          <li key={element}>
            <i className='fa-li fa fa-check'></i>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}
