import React from "react";
import { useHistory } from "react-router-dom";
import Jump from "react-reveal/Jump";

import "./style.css";

export default function ProjectsBtn() {

    const history = useHistory();
    async function handleClick(user) {
        (history.push("/projects"))
    }
    return (
        <Jump>
    <button 
    className="prjectBtn btn-primary" 
    onClick={handleClick} >
      <p className="prjectText" >Projects</p>
    </button>
    </Jump>
    );
}