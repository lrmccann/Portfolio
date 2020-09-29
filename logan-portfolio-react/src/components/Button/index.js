import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

export function ProjectsBtn() {

    const history = useHistory();
    let newVar = user
    const getUserDataById = async () => {
        await API.getMatchesYesByName(newVar.userName)
        .then(response => getAllMatchesForMatchesPage(response.data))
        
    }
    async function handleClick(user) {
        console.log(userForMatchesPage, "anytext")
        await getUserDataById(user)
        .then(history.push("/matches"))
    }
    return (
    <button 
    className="btn" 
    onClick={handleClick} >
      <p className="btn-login" > Matches </p>
    </button>
    );
}