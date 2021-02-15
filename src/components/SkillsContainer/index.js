import React from "react";
import "./style.css";

export default function SkillsContainer(props) {

    const skillImagesToMap = {
        images: [...props.skillImages],
        skills: (props.skills)
    }

    return (
        <div className="skillsDiv container">
            <h2>{props.skillType}</h2>
            <div className="rowDiv">
                <div className="cardHolder">
                    {skillImagesToMap.images.map((mappedIcon , iconKey) => (
                        <div key={iconKey} className="eachImage">
                            <img  src={mappedIcon} alt={props.altSkills} className="skillIcon"></img>
                        </div>
                    ))}
                </div>
                <div className="cardKeeper">
                    {skillImagesToMap.skills.map((mappedText , textKey) => (
                        <div className="textHolder" key={textKey}>
                            <p className="skillText">{mappedText}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
};