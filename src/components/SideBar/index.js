import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faBlog, faFileAlt, faPhoneVolume, faTrophy, faBold, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


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
    const awardsPage = () => {
        history.push('/awards')
    }
    const contactPage = () => {
        history.push('/contact')
    }

    return (
        // <div className=" sideBarCont container-fluid">
        <div className=" sideBarCont container-fixed">
            <div className="myInfoDiv">
            <img src={require("../../page-images/canva-logo-2.png")} className="randomclassname"></img>
                {/* <p className="firstNameText" id="myInfoText">Logan</p><br></br><p className="lastNameText" id="myInfoText">McCann</p>
                <p className="ocText">Full Stack Engineer</p> */}
            </div>
            <div className="btnCont">
                <button className="homeBtn" id="navBarBtn" onClick={homePage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faHome} />
                    {/* <h6 className="homeText">Home</h6> */}
                </button>
                <button className="projectsBtn" id="navBarBtn" onClick={projectsPage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faFolder} />
                    {/* <h6 className="projectsText">Projects</h6> */}
                </button>
                {/* <button className="awardsBtn" id="navBarBtn" onClick={awardsPage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faTrophy} />
                    <h5 className="awardsText">Awards</h5>
                </button> */}
                <button className="resumeBtn" id="navBarBtn" onClick={resumePage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faFileAlt} />
                    {/* <h6 className="resumeText">Resume</h6> */}
                </button>
                <button className="blogBtn" id="navBarBtn" onClick={blogPage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faBold} />
                    {/* <h6 className="blogText">Blog</h6> */}
                </button>
                <button className="contactBtn" id="navBarBtn" onClick={contactPage}>
                    <FontAwesomeIcon id="fontAwsIcon" icon={faAddressBook} />
                    {/* <h6 className="contactText">Contact</h6> */}
                </button>

            </div>
            <div className="socialMediaLinks">
            <div className="myGithubBtn">
              <a href="https://github.com/lrmccann" target="_blank">
                <img alt="Github Link" src={require('../../skills-icons/github-icon-2.png')}>
                </img>
                </a>
              </div>
              <div className="myMediumBtn">
              <a href="https://medium.com/@loganrmccann" target="_blank">
                <img alt="Medium Link" src={require('../../page-images/medium-icon2.png')}></img>
                </a>
              </div>
              <div className="mylinkedInBtn">
              <a href="https://www.linkedin.com/in/logan-mccann-381855155/" target="_blank">
                <img  alt="LinkedIn Link" src={require('../../page-images/linkedin-icon2.png')}>
                </img>
                </a>
              </div>
            </div>
        </div>
    )

}