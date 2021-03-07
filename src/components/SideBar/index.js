import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faFileAlt, faBold, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';


export default function SideBar(props) {
    let history = useHistory();
    let location = useLocation();

    const [screenWidth , setScreenWidth] = useState(window.innerWidth);
    const [githubImg , setGithubImg] = useState(require('../../page-images/github-mini-img.png'));
    const [mediumBtn , setMediumImg] = useState(require('../../page-images/medium-icon2.png'));
    const [linkedinImg , setlinkedinImg] = useState(require('../../page-images/linkedin-icon2.png'));


    useEffect(() => {
        function handleResize(){
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize' , handleResize)
        return _ => {
            window.removeEventListener('resize' , handleResize);
        }
    })

    useEffect(() => {
        if(screenWidth <= 599){
            setGithubImg(require('../../page-images/canva-logo-2.png'));
            setMediumImg();
            setlinkedinImg();
        }   
        else if(screenWidth >= 600 && screenWidth <= 991){
            setGithubImg(require('../../page-images/city-bg-img.jpg'));
            setMediumImg();
            setlinkedinImg();
        }
        else if(screenWidth >= 992){
            setGithubImg(require('../../page-images/amazon-lg.png'));
            setMediumImg();
            setlinkedinImg();
        }
    })

    console.log(screenWidth, "screen width my boi")






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
                <img
                    alt="Logan McCann"
                    src={require("../../page-images/canva-logo-2.png")}
                ></img>
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
                <div id="social-media-btn" className="myGithubBtn">
                    <a id="social-media-a-tag" href="https://github.com/lrmccann" target="_blank" rel="noopener noreferrer">
                        <img id="social-media-icon" alt="Github Link" 
                        src={require('../../page-images/github-mini-img.png')}
                        // src={githubImg}
                        ></img>
                    </a>
                </div>
                <div id="social-media-btn" className="myMediumBtn">
                    <a id="social-media-a-tag" href="https://medium.com/@loganrmccann" target="_blank" rel="noopener noreferrer">
                        <img id="social-media-icon" alt="Medium Link" src={require('../../page-images/medium-icon2.png')}></img>
                    </a>
                </div>
                <div id="social-media-btn" className="mylinkedInBtn">
                    <a id="social-media-a-tag" href="https://www.linkedin.com/in/logan-mccann-381855155/" target="_blank" rel="noopener noreferrer">
                        <img id="social-media-icon" alt="LinkedIn Link" src={require('../../page-images/linkedin-icon2.png')}></img>
                    </a>
                </div>
            </div>
        </div>
    );
};