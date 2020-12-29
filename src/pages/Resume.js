import React from "react";
import '../styleSheets/resume.css';
// import "../images/resume-img.png";
import resume from '../page-images/Logan-McCann-Resume-Use.png';

export default function Resume () {

    return (
        <div className="resumeCont">
            <img className="resumeImg" src={resume}>
            </img>
        </div>
    )
}