import React, { useReducer, useEffect } from 'react';

import '../styles/Header.scss';

export default function Header(props) {
  const jobTitleReducer = (state, action) => {
    const { type, character } = action;
    switch (type) {
      case 'ADD_CHARACTER':
        return state + character;
      case 'REMOVE_CHARACTER':
        return state.slice(0, -1);
      default:
        return state;
    }
  };

  const [jobTitle, dispatchJobTitle] = useReducer(jobTitleReducer, '');

  useEffect(() => {
    var timer = 100;
    const interval = setInterval(() => {
      const jobTitleCharacters = 'Junior Software Developer'.split('');

      jobTitleCharacters.forEach(character => {
        setTimeout(() => {
          dispatchJobTitle({ type: 'ADD_CHARACTER', character });
        }, timer);
        timer += 80;
      });

      timer += 800;

      jobTitleCharacters.forEach(character => {
        setTimeout(() => {
          dispatchJobTitle({ type: 'REMOVE_CHARACTER', character });
        }, timer);
        timer += 40;
      });

      timer += 800;
    }, timer);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      ref={props.reference}
      className="d-flex justify-content-center align-items-center text-center"
      style={{ height: window.innerHeight }}
    >
      <div className="text-background"></div>
      <div className="text">
        <h1 className="mb-5 display-1">Ngoc Doan</h1>
        <h3>{`${jobTitle}|`}</h3>
      </div>
    </header>
  );
}
