import React from "react";
import "./style.css";

export default function SkillsContainer(props) {
    return (
        <div className="skillTypeCont">
            <h2 id="skillsTypeText">{props.skillType}</h2>
            <div className="makeFlexRow">
                <div className="makeFlexColumn">
                    <img src={props.imageOne} alt={props.altOne} id='skillImg'></img>
                    <h5>{props.itemOne}</h5>
                </div>
                <div className="makeFlexColumn">
                    <img src={props.imageTwo} alt={props.altTwo} id='skillImg'></img>
                    <h5>{props.itemTwo}</h5>
                </div>
                <div className="makeFlexColumn">
                    <img src={props.imageThree} alt={props.altThree} id='skillImg'></img>
                    <h5>{props.itemThree}</h5>
                </div>
                <div className="makeFlexColumn">
                    <img src={props.imageFour} alt={props.altFour} id='skillImg'></img>
                    <h5>{props.itemFour}</h5>
                </div>
                <div className="makeFlexColumn">
                    <img src={props.imageFive} alt={props.altFive} id='skillImg'></img>
                    <h5>{props.itemFive}</h5>
                </div>
            </div>
        </div>
    )



}