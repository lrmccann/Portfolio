import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faFileAlt, faBold, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';


export default function SideBar(props) {
    let history = useHistory();
    let location = useLocation();
    console.log(location.pathname, "path name")
    // HOME BTN FUNC
    const homePage = () => {
        history.push('/home');
    }
    const [homeNavLink, setHomeNavLink] = useState(<FontAwesomeIcon id="fontAwsIcon" icon={faHome} />)
    const hoverHomeLink = e => {
        e.preventDefault();
        setHomeNavLink(<h5 id="textAfterFlip">Home</h5>)
    }
    const resetHomeLink = e => {
        e.preventDefault();
        setHomeNavLink(<FontAwesomeIcon id="fontAwsIcon" icon={faHome} />)
    }
    //
    // PROJECTS BTN FUNC
    const projectPage = () => {
        history.push('/projects');
    }
    const [projectsNavLink, setprojectNavLink] = useState(<FontAwesomeIcon id="fontAwsIcon" icon={faFolder} />)
    const hoverProjectLink = e => {
        e.preventDefault();
        setprojectNavLink(<h5 id="textAfterFlip">Projects</h5>)
    }
    const resetProjectLink = e => {
        e.preventDefault();
        setprojectNavLink(<FontAwesomeIcon id="fontAwsIcon" icon={faFolder} />)
    }
    //
    // RESUME BTN FUNC
    const resumePage = () => {
        history.push('/resume');
    }
    const [resumeNavLink, setResumeNavLink] = useState(<FontAwesomeIcon id="fontAwsIcon" icon={faFileAlt} />)
    const hoverResumeLink = e => {
        e.preventDefault();
        setResumeNavLink(<h5 id="textAfterFlip">Resume</h5>)
    }
    const resetResumeLink = e => {
        e.preventDefault();
        setResumeNavLink(<FontAwesomeIcon id="fontAwsIcon" icon={faFileAlt} />)
    }
    //
    // BLOG BTN FUNC
    const blogPage = () => {
        history.push('/blog');
    }
    const [blogNavLink, setBlogNavLink] = useState(<FontAwesomeIcon id="fontAwsIcon" icon={faBold} />)
    const hoverBlogLink = e => {
        e.preventDefault();
        setBlogNavLink(<h5 id="textAfterFlip">Blog</h5>)
    }
    const resetBlogLink = e => {
        e.preventDefault();
        setBlogNavLink(<FontAwesomeIcon id="fontAwsIcon" icon={faBold} />)
    }
    //
    // CONTACT BTN FUNC
    const contactPage = () => {
        history.push('/contact');
    }
    const [contactNavLink, setContactNavLink] = useState(<FontAwesomeIcon id="fontAwsIcon" icon={faAddressBook} />)
    const hoverContactLink = e => {
        e.preventDefault();
        setContactNavLink(<h5 id="textAfterFlip">Contact</h5>)
    }
    const resetContactLink = e => {
        e.preventDefault();
        setContactNavLink(<FontAwesomeIcon id="fontAwsIcon" icon={faAddressBook} />)
    }
    //
    return (
        <div className="sideBarCont container-fixed">
            <div className="myInfoDiv">
                <img alt="Logan McCann" src={require("../../page-images/canva-logo-2.png")}></img>
            </div>
            <div className="btnCont">
                <button className="homeBtn" id="navBarBtn" onMouseEnter={hoverHomeLink} onMouseLeave={resetHomeLink} onClick={homePage}>
                    {homeNavLink}
                </button>
                <button className="projectsBtn" id="navBarBtn" onMouseEnter={hoverProjectLink} onMouseLeave={resetProjectLink} onClick={projectPage}>
                    {projectsNavLink}
                </button>
                <button className="resumeBtn" id="navBarBtn" onMouseEnter={hoverResumeLink} onMouseLeave={resetResumeLink} onClick={resumePage}>
                    {resumeNavLink}
                </button>
                <button className="blogBtn" id="navBarBtn" onMouseEnter={hoverBlogLink} onMouseLeave={resetBlogLink} onClick={blogPage}>
                    {blogNavLink}
                </button>
                <button className="contactBtn" id="navBarBtn" onMouseEnter={hoverContactLink} onMouseLeave={resetContactLink} onClick={contactPage}>
                    {contactNavLink}
                </button>
            </div>
            <div className="socialMediaLinks">
                <div className="myGithubBtn">
                    <a href="https://github.com/lrmccann" target="_blank" rel="noopener noreferrer">
                        <img alt="Github Link" src={require('../../page-images/github-icon-2.png')}></img>
                    </a>
                </div>
                <div className="myMediumBtn">
                    <a href="https://medium.com/@loganrmccann" target="_blank" rel="noopener noreferrer">
                        <img alt="Medium Link" src={require('../../page-images/medium-icon2.png')}></img>
                    </a>
                </div>
                <div className="mylinkedInBtn">
                    <a href="https://www.linkedin.com/in/logan-mccann-381855155/" target="_blank" rel="noopener noreferrer">
                        <img alt="LinkedIn Link" src={require('../../page-images/linkedin-icon2.png')}></img>
                    </a>
                </div>
            </div>
        </div>
    );
};