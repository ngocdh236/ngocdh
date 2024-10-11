import React from "react";

import "../styles/Experience.scss";

export default function Experience(props) {
  const experience = [
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Wolt",
      time: "April 2023 - Present",
      tasks: [
        "Delivery platform for food and merchandise",
        "Develop and maintain APIs for payment services",
        "Integrate multiple payment service providers into payment services",
        "Keywords: food delivery, payment, backend development, Python, Kotlin, FastAPI, Flask, PostgreSQL, AWS, Kubernetes",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Mavericks",
      time: "July 2022 - March 2023",
      tasks: [
        {
          client: "Wolt",
          tasks: [],
        },
      ],
    },
    {
      id: 1,
      title: "Software Engineer",
      company: "Futurice",
      time: "May 2021 - June 2022",
      tasks: [
        {
          client: "Futurice",
          tasks: [
            "Develop and maintain a search engine called Futucortex for collective knowledge within Futurice, it consolidates data and provides relevant recommendations in a single go-to platform",
            "Bronze Winner of The Lovie Awards 2021 (https://winners.lovieawards.com/#!w=323)",
            "Keywords: search engine, full stack development, React, Node.js, GraphQL, Elasticsearch, AWS",
          ],
        },
        {
          client: "Lexia",
          tasks: [
            "Develop similar search engine like Futucortex",
            "Develop, maintain frontend and backend systems",
            "Implement a system to view / mark availability for employees",
            "Keywords: React, Node.js",
          ],
        },
        {
          client: "City of Helsinki",
          tasks: [
            "Develop, maintain applicant and handler web applications for Helsinki Benefit service",
            "https://www.hel.fi/en/business-and-work/employers/helsinki-benefit-for-employers",
            "Keywords: Next.js, Django",
          ],
        },
        {
          client: "Vapaus",
          tasks: [
            "Develop, maintain frontend and backend systems",
            "Automate admin and billing processes, improve admin system",
            "Keywords: PHP, React",
          ],
        },
      ],
    },
    {
      id: 0,
      title: "Software Engineer",
      company: "Blidz",
      time: "December 2019 - April 2021",
      tasks: [
        "Blidz is a social shopping app",
        "Develop and maintain RESTful API",
        "Migrate from Python 2 to Python 3",
        "Integrate new authentication service, new payment gateway and new image processing service",
        "Implement new gamified features",
        "Keywords: E-commerce, gamified, backend development, Python, Django, MongoDB, Elasticsearch, Vagrant, SaltStack, GCP",
      ],
    },
  ];

  const isObject = (element) => {
    return typeof element === "object";
  };

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
              {element.tasks.map((item) =>
                !isObject(item) ? (
                  <li key={item}>{item}</li>
                ) : (
                  <div>
                    <li key={item.client}>{item.client}</li>
                    <ul>
                      {item.tasks.map((client_task) => (
                        <li key={client_task}>{client_task}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </ul>
          </div>

          <span className="text-md-right text-time">{element.time}</span>
        </div>
      ))}
    </div>
  );
}
