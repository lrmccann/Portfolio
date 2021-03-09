import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faFileAlt, faBold, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


export default function SideBar(props) {
    let history = useHistory();

    // HOME BTN FUNC
    const homePage = () => {
        history.push('/home');
    }
    const [homeNavLink, setHomeNavLink] = useState(<FontAwesomeIcon id="font-aws-icon" icon={faHome} />)
    const hoverHomeLink = e => {
        e.preventDefault();
        setHomeNavLink(<h5 id="navbar-text">Home</h5>)
    }
    const resetHomeLink = e => {
        e.preventDefault();
        setHomeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faHome} />)
    }
    //
    // PROJECTS BTN FUNC
    const projectPage = () => {
        history.push('/projects');
    }
    const [projectNavLink, setprojectNavLink] = useState(<FontAwesomeIcon id="font-aws-icon" icon={faFolder} />)
    const hoverProjectLink = e => {
        e.preventDefault();
        setprojectNavLink(<h5 id="navbar-text">Projects</h5>)
    }
    const resetProjectLink = e => {
        e.preventDefault();
        setprojectNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFolder} />)
    }
    //
    // RESUME BTN FUNC
    const resumePage = () => {
        history.push('/resume');
    }
    const [resumeNavLink, setResumeNavLink] = useState(<FontAwesomeIcon id="font-aws-icon" icon={faFileAlt} />)
    const hoverResumeLink = e => {
        e.preventDefault();
        setResumeNavLink(<h5 id="navbar-text">Resume</h5>)
    }
    const resetResumeLink = e => {
        e.preventDefault();
        setResumeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFileAlt} />)
    }
    //
    // BLOG BTN FUNC
    const blogPage = () => {
        history.push('/blog');
    }
    const [blogNavLink, setBlogNavLink] = useState(<FontAwesomeIcon id="font-aws-icon" icon={faBold} />)
    const hoverBlogLink = e => {
        e.preventDefault();
        setBlogNavLink(<h5 id="navbar-text">Blog</h5>)
    }
    const resetBlogLink = e => {
        e.preventDefault();
        setBlogNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faBold} />)
    }
    //
    // CONTACT BTN FUNC
    const contactPage = () => {
        history.push('/contact');
    }
    const [contactNavLink, setContactNavLink] = useState(<FontAwesomeIcon id="font-aws-icon" icon={faAddressBook} />)
    const hoverContactLink = e => {
        e.preventDefault();
        setContactNavLink(<h5 id="navbar-text">Contact</h5>)
    }
    const resetContactLink = e => {
        e.preventDefault();
        setContactNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faAddressBook} />)
    }
    //

    return (
        <div className="navbar-container container-fixed">
            <div className="icon-cont">
                <img alt="Logan McCann" src={require("../../page-images/canva-logo-2.png")}></img>
            </div>
            <div className="nav-link-container">
                <button id="navbar-btn"
                    onMouseEnter={hoverHomeLink}
                    onMouseLeave={resetHomeLink}
                    onClick={homePage}>
                    {homeNavLink}
                </button>
                <button id="navbar-btn"
                    onMouseEnter={hoverProjectLink}
                    onMouseLeave={resetProjectLink}
                    onClick={projectPage}>
                    {projectNavLink}
                </button>
                <button id="navbar-btn"
                    onMouseEnter={hoverResumeLink}
                    onMouseLeave={resetResumeLink}
                    onClick={resumePage}>
                    {resumeNavLink}
                </button>
                <button id="navbar-btn"
                    onMouseEnter={hoverBlogLink}
                    onMouseLeave={resetBlogLink}
                    onClick={blogPage}>
                    {blogNavLink}
                </button>
                <button id="navbar-btn"
                    onMouseEnter={hoverContactLink}
                    onMouseLeave={resetContactLink}
                    onClick={contactPage}>
                    {contactNavLink}
                </button>
            </div>
            <div className="social-media-link-container">
                <div id="social-media-btn" className="myGithubBtn">
                    <a id="social-media-link" href="https://github.com/lrmccann" target="_blank" rel="noopener noreferrer">
                        <img id="social-media-icon" alt="Github Link"
                            src={require('../../page-images/github-mini-img.png')}
                        // src={githubImg}
                        ></img>
                    </a>
                </div>
                <div id="social-media-btn" className="myMediumBtn">
                    <a id="social-media-link" href="https://medium.com/@loganrmccann" target="_blank" rel="noopener noreferrer">
                        <img id="social-media-icon" alt="Medium Link" src={require('../../page-images/medium-icon2.png')}></img>
                    </a>
                </div>
                <div id="social-media-btn" className="mylinkedInBtn">
                    <a id="social-media-link" href="https://www.linkedin.com/in/logan-mccann-381855155/" target="_blank" rel="noopener noreferrer">
                        <img id="social-media-icon" alt="LinkedIn Link" src={require('../../page-images/linkedin-icon2.png')}></img>
                    </a>
                </div>
            </div>
        </div>
    );
};