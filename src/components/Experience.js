import React from "react";

import "../styles/Experience.scss";

export default function Experience(props) {
  const experience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Futurice",
      time: "May 2021 - present",
      tasks: [
        "Develop and maintain a search engine called Futucortex for collective knowledge within Futurice, it consolidates data and provides relevant recommendations in a single go-to platform",
        "Bronze Winner of The Lovie Awards 2021 (https://winners.lovieawards.com/#!w=323)",
        "Keywords: search engine, full stack development, React, Node.js, GraphQL, Elasticsearch, AWS",
      ],
    },
    {
      id: 0,
      title: "Software Engineer",
      company: "Blidz",
      time: "December 2019 - April 2021",
      tasks: [
        "Blidz is a social shopping app",
        "Task: Develop and maintain RESTful APIs",
        "Keywords: E-commerce, gamified, backend development, Python, Django, MongoDB, Elasticsearch, Vagrant, SaltStack, GCP",
      ],
    },
  ];
  return (
    <div ref={props.reference} className="Experience p-5">
      <h2>Experience</h2>

      {experience.map((element) => (
        <div
          key={element.id}
          className="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div>
            <h5>{element.title}</h5>
            <div className="mb-3">{element.company}</div>
            <ul>
              {element.tasks.map((task) => (
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
