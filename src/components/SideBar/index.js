import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faAddressCard , faFolder , faBlog , faFileAlt , faPhoneVolume , faTrophy  } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom';

export default function SideBar() {
    let history = useHistory();

    const homePage = () => {
        history.push('/home')
    }
    const projectsPage = () => {
        history.push('/projects')
    }
    const resumePage = () => {
        history.push('/resume')
    }
    const blogPage = () => {
        history.push('/blog')
    }
    const aboutPage = () => {
        history.push('/about')
    }
    const contactPage = () => {
        history.push('/contact')
    }

    return (
        <div className="container sideBarCont">
            <div className="myInfoDiv">
                <p className="firstNameText" id="myInfoText">Logan</p><br></br><p className="lastNameText" id="myInfoText">McCann</p>
                <p className="ocText">Full Stack Engineer</p>
            </div>
            <div className="btnCont">
                <button className="homeBtn" id="navBarBtn" onClick={homePage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faHome}/>
                    <h6 className="homeText">Home</h6>
                </button>
                <button className="projectsBtn" id="navBarBtn" onClick={projectsPage}>
                <FontAwesomeIcon id="fontAwsIcon"  icon={faFolder}/>
                    <h6 className="projectsText">Projects</h6>
                </button>
                <button className="awardsBtn" id="navBarBtn" onClick={aboutPage}>
                <FontAwesomeIcon id="fontAwsIcon" icon={faTrophy}/>
                    <h6 className="awardsText">Awards</h6>
                </button>
                <button className="blogBtn" id="navBarBtn" onClick={blogPage}>
                <FontAwesomeIcon id="fontAwsIcon" icon={faBlog}/>
                    <h6 className="blogText">Blog</h6>
                </button>
                <button className="resumeBtn" id="navBarBtn" onClick={resumePage}>
                <FontAwesomeIcon id="fontAwsIcon" icon={faFileAlt}/>
                    <h6 className="resumeText">Resume</h6>
                </button>
                <button className="contactBtn" id="navBarBtn" onClick={contactPage}>
                <FontAwesomeIcon id="fontAwsIcon" icon={faPhoneVolume}/>
                    <h6 className="contactText">Contact</h6>
                </button>

            </div>
        </div>
    )

}