import React from "react";
import "../page-images/port-pic.jpeg";
import SkillsContainer from '../components/SkillsContainer/index';
import "../styleSheets/home.css";


export default function Home() {


  return (
    <div className="homePage" >
      <div className="bioInfo">
        <div className="imageCont">
          <img className="myImage" alt="Logan McCann" src={require('../page-images/port-pic.jpeg')} />
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
          altOne={'HTML-5 icon'}
          itemOne={'HTML-5'}
          imageTwo={require('../skills-icons/css-icon.png')}
          altTwo={'CSS Icon'}
          itemTwo={'CSS'}
          imageThree={require('../skills-icons/javascript-icon.png')}
          altThree={'Javascript Icon'}
          itemThree={'JavaScript'}
          // itemFour={'JSX'}
          imageFour={require('../skills-icons/sass-icon.png')}
          altFour={'Sass Icon'}
          itemFour={'Sass'}
        />
        <SkillsContainer
          skillType={'Libraries'}
          imageOne={require('../skills-icons/react-icon.png')}
          altOne={'React Icon'}
          itemOne={'React'}
          imageTwo={require('../skills-icons/jquery-icon.png')}
          altTwo={'jQuery Icon'}
          itemTwo={'jQuery'}
          imageThree={require('../skills-icons/bootstrap-icon.png')}
          altThree={'Bootstrap Icon'}
          itemThree={'Bootstrap'}

        />
        <SkillsContainer
          skillType={'Frameworks'}
          imageOne={require('../skills-icons/vuejs-icon.png')}
          altOne={'Vue js Icon'}
          itemOne={'Vue.js'}
          imageTwo={require('../skills-icons/node-icon.png')}
          altTwo={'Node js Icon'}
          itemTwo={'Node.js'}
          imageThree={require('../skills-icons/express-icon.png')}
          altThree={'Express Icon'}
          itemThree={'Express'}

        />
        <SkillsContainer
          skillType={'Databases'}
          imageOne={require('../skills-icons/mysql-icon.png')}
          altOne={'MySQL Icon'}
          itemOne={'MySql'}
          imageTwo={require('../skills-icons/firebase-icon.png')}
          altTwo={'Firebase Icon'}
          itemTwo={'Firebase'}
          imageThree={require('../skills-icons/mongodb-icon.png')}
          altThree={'MongoDB Icon'}
          itemThree={'MongoDB'}

        />
        <SkillsContainer
          skillType={'Tools'}
          imageOne={require('../skills-icons/github-icon.png')}
          altOne={'Github Icon'}
          itemOne={'Github'}
          imageTwo={require('../skills-icons/heroku-icon.png')}
          altTwo={'Heroku Icon'}
          itemTwo={'Heroku'}
          imageThree={require('../skills-icons/aws-icon.png')}
          altThree={'aws Icon'}
          itemThree={'AWS'}
          imageFour={require('../skills-icons/robo3t-icon.png')}
          altFour={'Robo 3T Icon'}
          itemFour={'Robo3T'}
          imageFive={require('../skills-icons/sqlWorkbench-icon.jpeg')}
          altFive={'SQL Workbench Icon'}
          itemFive={'Workbench'}
        />
      </div>
    </div>
  )
}