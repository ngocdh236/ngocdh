/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from "react";

import "../styles/Header.scss";

export default function Header(props) {
  const jobTitleReducer = (state, action) => {
    const { type, character } = action;
    switch (type) {
      case "ADD_CHARACTER":
        return state + character;
      case "REMOVE_CHARACTER":
        return state.slice(0, -1);
      default:
        return state;
    }
  };

  const [jobTitle, dispatchJobTitle] = useReducer(jobTitleReducer, "");

  const jobTitleCharacters = "Software Developer".split("");

  const addingCharacterTime = 80;
  const removingCharacterTime = 40;
  const pauseTime = 400;

  const writingJobTitle = () => {
    var timer = 0;

    jobTitleCharacters.forEach(character => {
      setTimeout(() => {
        dispatchJobTitle({ type: "ADD_CHARACTER", character });
      }, timer);
      timer += addingCharacterTime;
    });

    timer += pauseTime;

    jobTitleCharacters.forEach(character => {
      setTimeout(() => {
        dispatchJobTitle({ type: "REMOVE_CHARACTER", character });
      }, timer);
      timer += removingCharacterTime;
    });
  };

  const { length } = jobTitleCharacters;
  const jobTitleWritingTime =
    length * addingCharacterTime +
    pauseTime * 2 +
    length * removingCharacterTime;

  useEffect(() => {
    writingJobTitle();
    const interval = setInterval(() => writingJobTitle(), jobTitleWritingTime);
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
