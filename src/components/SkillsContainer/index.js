/* eslint-disable react/prop-types */
/* eslint-disable semi */
import React from 'react';
import './style.css';

export default function SkillsContainer (props) {
  console.log(props.skills, 'props for skills here')

  return (
    <div className="skill-main-cont container-fluid">
      <h2>{props.skillType}</h2>
      <div className="skill-row">
        {props.skills.map((content, contentKey) => (
          <div key={contentKey} className="content-skill">
            <img
              src={content.img}
              alt={props.altSkills}
              className="skill-icon"
            ></img>
            <h4 className='skill-text'>{content.skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
