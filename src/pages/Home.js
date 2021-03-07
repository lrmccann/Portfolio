import React from "react";
import SkillsContainer from '../components/SkillsContainer/index';
import "../styleSheets/home.css";
import Fade from 'react-reveal/Fade';
import { skillIconsOne, skillsIconsTwo, skillsIconsThree, skillsIconsFour, skillsIconsFive } from "../skills-icons/importSkills";


export default function Home() {

  var skillsOne = ["HTML-5", "CSS", "JavaScript", "Sass"];
  var altSkillsOne = ["HTML-5 Icon", "CSS Icon", "JavaScript Icon", "Sass Icon"]
  var skillsTwo = ["React", "jQuery", "Bootstrap"];
  var altSkillsTwo = ["React Icon", "jQuery Icon", "Bootstrap Icon"]
  var skillsThree = ["Vue.js", "Node.js", "React Native", "Expo"];
  var altSkillsThree = ["Vue.js Icon", "Node.js Icon", "Expo", "React Native"]
  var skillsFour = ["MySQL", "Firebase", "MongoDB"];
  var altSkillsFour = ["MySQL Icon", "Firebase Icon", "MongoDB Icon"]
  var skillsFive = ["AWS", "Github", "Heroku", "Robo3T", "Jest", "Workbench", "Webpack"];
  var altSkillsFive = ["Github Icon", "Heroku Icon", "AWS Icon", "Robo3T Icon", "Jest", "MySQL Workbench Icon", "Webpack"]

    console.log(window.innerWidth)
  return (
    <div className="homePage container-fixed">
      <h1 id="home-header">Home</h1>
      <div className="textAndImgCont container-fixed">
        {/* <img id="profile-picture" alt="Logan R McCann" src={require("../page-images/prof-pic-1.png")}></img> */}
        <img id="profile-picture" alt="Logan R McCann" src={require("../page-images/large-prof-pic.png")}></img>
        <div className="bioTextDiv container-fixed">
          <h2 id="abt-me-text">About Me</h2>
          <p id="bio-text">
            I am a full stack web developer living in Brooklyn, New York. I focus on crafting clean & user-friendly experiences. I currently specialize in Javascript & Node.js, and enjoy learning new languages in my free time.
          <br></br>
            <br></br>
          Being a well-organized problem solver with an obsessive attention to detail, I love to help designers, agencies, and businesses bring their ideas to life.
          <br></br>
            <br></br>
          If you are seeking a web presence or an employer looking to hire, you can contact me here.
            </p>
        </div>
      </div>
      <div className="skillsCont container-fixed">
        <Fade bottom>
          <SkillsContainer
            skillType={'Languages'}
            skills={skillsOne}
            skillImages={skillIconsOne}
            altSkills={altSkillsOne}
          />
          <SkillsContainer
            skillType={'Libraries'}
            skills={skillsTwo}
            skillImages={skillsIconsTwo}
            altSkills={altSkillsTwo}
          />
          <SkillsContainer
            skillType={'Frameworks'}
            skills={skillsThree}
            skillImages={skillsIconsThree}
            altSkills={altSkillsThree}
          />
          <SkillsContainer
            skillType={'Databases'}
            skills={skillsFour}
            skillImages={skillsIconsFour}
            altSkills={altSkillsFour}
          />
          <SkillsContainer
            skillType={'Tools'}
            skills={skillsFive}
            skillImages={skillsIconsFive}
            altSkills={altSkillsFive}
          />
        </Fade>
        </div>
      </div>
  )
}