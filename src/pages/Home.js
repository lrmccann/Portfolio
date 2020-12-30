import React from "react";
import "../page-images/port-pic.jpeg";
import Fade from "react-reveal/Fade";
import SkillsContainer from '../components/SkillsContainer/index';
import "../styleSheets/home.css";


export default function Home() {


  return (
    <div className="homePage" >
      <div className="bioInfo">
        <div className="imageCont">
          <img className="myImage" src={require('../page-images/port-pic.jpeg')} />
          <p className="aboutMeText">I am a highly adaptable and detail-oriented web developer with extensive background in various coding languages, building responsive websites from front-end to back-end,
          and developing mobile applications. Specializes in JSX and CSS. Poised to contribute creative problem solving techniques,
           excellent interpersonal skills, and time management.</p>
        </div>
      </div>
      <div className="skillsCont container">
        <h1 className="skillsHeaderText">Skills That Pay The Bills $$</h1>
        <SkillsContainer
          skillType={'Languages'}
          imageOne={require('../skills-icons/html-icon.png')}
          itemOne={'HTML-5'}
          imageTwo={require('../skills-icons/css-icon.png')}
          itemTwo={'CSS'}
          imageThree={require('../skills-icons/javascript-icon.png')}
          itemThree={'JavaScript'}
          // itemFour={'JSX'}
          imageFour={require('../skills-icons/sass-icon.png')}
          itemFour={'Sass'}

        />
        <SkillsContainer
          skillType={'Libraries'}
          imageOne={require('../skills-icons/react-icon.png')}
          itemOne={'React'}
          imageTwo={require('../skills-icons/jquery-icon.png')}
          itemTwo={'jQuery'}
          imageThree={require('../skills-icons/bootstrap-icon.png')}
          itemThree={'Bootstrap'}

        />
        <SkillsContainer
          skillType={'Frameworks'}
          imageOne={require('../skills-icons/vuejs-icon.png')}
          itemOne={'Vue.js'}
          imageTwo={require('../skills-icons/node-icon.png')}
          itemTwo={'Node.js'}
          imageThree={require('../skills-icons/express-icon.png')}
          itemThree={'Express'}

        />
        <SkillsContainer
          skillType={'Databases'}
          imageOne={require('../skills-icons/mysql-icon.png')}
          itemOne={'MySql'}
          imageTwo={require('../skills-icons/firebase-icon.png')}
          itemTwo={'Firebase'}
          imageThree={require('../skills-icons/mongodb-icon.png')}
          itemThree={'MongoDB'}

        />
        <SkillsContainer
          skillType={'Tools'}
          imageOne={require('../skills-icons/github-icon.png')}
          itemOne={'Github'}
          imageTwo={require('../skills-icons/heroku-icon.png')}
          itemTwo={'Heroku'}
          imageThree={require('../skills-icons/aws-icon.png')}
          itemThree={'AWS'}
          imageFour={require('../skills-icons/robo3t-icon.png')}
          itemFour={'Robo3T'}
          imageFive={require('../skills-icons/sqlWorkbench-icon.jpeg')}
          itemFive={'SQL Workbench'}
        />
      </div>
    </div>
  )
}