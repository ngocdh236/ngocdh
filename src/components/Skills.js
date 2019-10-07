import React from 'react';

import '../styles/Skills.scss';

export default function Skills(props) {
  const icons = [
    { name: 'fab fa-js-square', color: '#f0db4f' },
    { name: 'fab fa-react', color: '#61dbfb' },
    { name: 'fab fa-sass', color: '#cd6799' },
    { name: 'fab fa-css3-alt', color: '#e31b5f' },
    { name: 'fab fa-html5', color: '#E44D26' },
    { name: 'fab fa-npm', color: '#303030' },
    { name: 'fab fa-node-js', color: '#3C873A' },
    { name: 'fab fa-swift', color: 'orange' },
    { name: 'fab fa-github', color: '#7dbbe6' },
    { name: 'fab fa-bitbucket', color: '#0357D1' }
  ];

  const skills = [
    {
      id: 0,
      title: 'Strong In',
      list: [
        'JavaScript',
        'SCSS',
        'React, Redux, Flow',
        'Node.js, Express.js, Mongoose'
      ]
    },
    {
      id: 1,
      title: 'Knowledgeable With',
      list: [
        'Mocha, Chai, Sinon',
        'Jest',
        'Storybook',
        'Design UI, UX',
        'Swift'
      ]
    }
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
          <li key={icon.name} className='list-inline-item'>
            <i className={icon.name} style={{ color: icon.color }}></i>
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
