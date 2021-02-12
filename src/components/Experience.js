import React from "react";

import "../styles/Experience.scss";

export default function Experience(props) {
  const experience = [
    {
      id: 0,
      title: "Software Engineer",
      company: "Blidz",
      time: "December 2019 - present",
      tasks: [
        "Develop and maintain RESTful APIs for company products with Python, using Django and Tornado frameworks",
        "CI, CD with Git, Vagrant, SaltStack, Jenkins and GCP"
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
