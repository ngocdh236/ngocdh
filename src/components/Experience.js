import React from "react";

import "../styles/Experience.scss";

export default function Experience(props) {
  const experience = [
    {
      id: 0,
      title: "Junior Software Engineer",
      company: "Blidz",
      time: "December 2019 - present",
      tasks: [
        "Learn Backend & DevOps technologies",
        "Develop, maintain Blidz application",
        "Backend development"
      ]
    },
    {
      id: 1,
      title: "Junior Web Developer",
      company: "INTEGRIFY",
      time: "June 2019 - November 2019",
      tasks: [
        "Develop an in-house web application for form customization and online surveys using MERN stack"
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
