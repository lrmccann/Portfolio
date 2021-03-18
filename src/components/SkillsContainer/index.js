/* eslint-disable react/prop-types */
/* eslint-disable semi */
import React from 'react';
import './style.css';

export default function SkillsContainer (props) {
  const skillsToMap = {
    images: [...props.skillImages],
    skills: props.skills
  };

  return (
    <div className="skill-main-cont container-fluid">
      <h2 id="skill-title-header">{props.skillType}</h2>
      <div className="skill-content">
        <div className="icon-div">
          {skillsToMap.images.map((mappedIcon, iconKey) => (
            <div key={iconKey} className="icon-holder">
              <img
                src={mappedIcon}
                alt={props.altSkills}
                className="skill-icon"
              ></img>
            </div>
          ))}
        </div>
        <div className="text-div">
          {skillsToMap.skills.map((mappedText, textKey) => (
            <div className="text-holder" key={textKey}>
              <p className="skill-text">{mappedText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
