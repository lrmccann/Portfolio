import React from "react";
import "../page-images/port-pic.jpeg";
import SkillsContainer from '../components/SkillsContainer/index';
import "../styleSheets/home.css";
import Fade from 'react-reveal/Fade';
import {skillIconsOne , skillsIconsTwo , skillsIconsThree , skillsIconsFour , skillsIconsFive} from "../skills-icons/importSkills";


export default function Home() {

  var skillsOne = ["HTML-5" , "CSS" , "JavaScript" , "Sass"];
  var altSkillsOne = ["HTML-5 Icon" , "CSS Icon" , "JavaScript Icon" , "Sass Icon"]
  var skillsTwo = ["React" , "jQuery" , "Bootstrap"];
  var altSkillsTwo = ["React Icon" , "jQuery Icon" , "Bootstrap Icon"]
  var skillsThree = ["Vue.js" , "Node.js" , "React Native", "Expo" , "Express"];
  var altSkillsThree = ["Vue.js Icon" , "Node.js Icon" , "Expo" , "React Native", "Express Icon"]
  var skillsFour = ["MySQL" , "Firebase" , "MongoDB"];
  var altSkillsFour = ["MySQL Icon" , "Firebase Icon" , "MongoDB Icon"]
  var skillsFive = ["AWS" , "Github" , "Heroku" , "Robo3T" , "Jest", "MySQL-Workbench"];
  var altSkillsFive = ["Github Icon" , "Heroku Icon" , "AWS Icon" , "Robo3T Icon" , "Jest" , "MySQL Workbench Icon"]

  return (
    <div className="homePage">
      <div className="myBioCont container">
        <div className="imgBorder">
          <img alt="Logan R McCann" src={require("../page-images/profile-pic-updated-md.jpeg")}>

          </img>
        </div>
        <div className="myBioTextCont">
          <p className="myBioInfoText">
            I am a highly adaptable and detail-oriented web developer with extensive background in various coding languages, building responsive websites from front-end to back-end,
            and developing mobile applications. Specializes in JSX and CSS. Poised to contribute creative problem solving techniques,
            excellent interpersonal skills, and time management.
           <div className="linkCont">
              <button className="myGithubLink">
                <img alt="Github Link" src={require('../page-images/github-for-home-page.jpg')}>
                </img>
              </button>
              <button className="mylinkedInBtn">
                <img  alt="LinkedIn Link" src={require('../page-images/linkedin-home-page.png')}>
                </img>
              </button>
              <button className="myMediumBtn">
                <img alt="Medium Link" src={require('../page-images/mediumm-link.png')}></img>
              </button>
            </div>
          </p>
        </div>
      </div>
      <div className="skillsCont container">
        <h1 className="skillsHeaderText">SKILLS</h1>
        <Fade bottom>
          <SkillsContainer
            skillType={'Languages'}
            skills={skillsOne}
            skillImages = {skillIconsOne}
            altSkills = {altSkillsOne}
          />
          <SkillsContainer
            skillType={'Libraries'}
            skills={skillsTwo}
            skillImages = {skillsIconsTwo}
            altSkills = {altSkillsTwo}
          />
          <SkillsContainer
            skillType={'Frameworks'}
            skills={skillsThree}
            skillImages = {skillsIconsThree}
            altSkills = {altSkillsThree}
          />
          <SkillsContainer
            skillType={'Databases'}
            skills={skillsFour}
            skillImages = {skillsIconsFour}
            altSkills = {altSkillsFour}
          />
          <SkillsContainer
            skillType={'Tools'}
            skills={skillsFive}
            skillImages = {skillsIconsFive}
            altSkills = {altSkillsFive}
          />
        </Fade>
      </div>
    </div>
  )
}