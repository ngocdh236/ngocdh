import React from 'react';

import '../styles/Nav.scss';

export default function Nav(props) {
  const {
    scrollToHeader,
    scrollToProjects,
    scrollToSkills,
    scrollToExperience,
    scrollToEducation
  } = props;

  const links = [
    {
      title: 'Projects',
      onClick: scrollToProjects
    },
    {
      title: 'Skills',
      onClick: scrollToSkills
    },
    {
      title: 'Experience',
      onClick: scrollToExperience
    },
    {
      title: 'Education',
      onClick: scrollToEducation
    },
    {
      title: 'About',
      onClick: () => {
        props.history.push('/about');
      }
    }
  ];
  return (
    <nav className="Nav navbar navbar-expand-sm">
      <button className="navbar-brand" onClick={scrollToHeader}>
        NGOC
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <i className="fas fa-bars" />
      </button>

      <div
        className="collapse navbar-collapse navbar-default ml-2"
        id="mobile-nav"
      >
        <ul className="navbar-nav ml-auto">
          {links.map(link => (
            <li key={link.title} className="nav-item">
              <button className="nav-link" onClick={link.onClick}>
                {link.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
