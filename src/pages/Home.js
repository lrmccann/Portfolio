/* eslint-disable semi */
import React from 'react';
import Fade from 'react-reveal/Fade';
import SkillsContainer from '../components/SkillsContainer/index';
import {
  skillIconsOne,
  skillIconsTwo,
  skillIconsThree,
  skillIconsFour,
  skillIconsFive
} from '../skill-icons/importSkills';
import '../styleSheets/home.css';

export default function Home () {
  console.log(skillIconsOne, skillIconsTwo)
  return (
    <div className="home-page container-fixed">
      <h1 id="home-header">Home</h1>
      <div className="about-me-cont container-fixed">
        <img
          id="profile-picture"
          alt="Logan R McCann"
          src={require('../page-images/LoganLarge.png')}
        ></img>
        <div className="bio-cont container-fixed">
          <h2 id="bio-header">About Me</h2>
          <p id="bio-text">
            I am a full stack web developer living in Chicago, Illinois. I
            focus on crafting clean & user-friendly experiences. I currently
            specialize in Javascript & Node.js, and enjoy learning new languages
            in my free time.
            <br></br>
            <br></br>
            Being a well-organized problem solver with an obsessive attention to
            detail, I love to help designers, agencies, and businesses bring
            their ideas to life.
            <br></br>
            <br></br>
            If you are seeking a web presence or an employer looking to hire,
            you can contact me here.
          </p>
        </div>
      </div>
      <div className="my-skills-cont container-fixed">
        <Fade bottom>
          <SkillsContainer
            skillType={'Languages'}
            skills={skillIconsOne}
          />
          <SkillsContainer
            skillType={'Libraries'}
            skills={skillIconsTwo}
          />
          <SkillsContainer
            skillType={'Frameworks'}
            skills={skillIconsThree}
          />
          <SkillsContainer
            skillType={'Databases'}
            skills={skillIconsFour}
          />
          <SkillsContainer
            skillType={'Tools'}
            skills={skillIconsFive}
          />
        </Fade>
      </div>
    </div>
  );
}
