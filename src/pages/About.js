import React from "react";
import FlipCardOne from "../components/FlipCards";
import Fade from "react-reveal/Fade";
import "../images/port-pic.jpeg";
import '../index.css';
import '../styleSheets/about.css';


export default function About () {
  return(
        <div className="homeCont">
          <div className="bioInfo">
            <div className="imageCont">
            <img className="myImage" src={require('../images/port-pic.jpeg')} />
            <p className="aboutMeText">I am a highly adaptable and detail-oriented web developer with extensive background in various coding languages, building responsive websites from front-end to back-end,
               and developing mobile applications. Specializes in JSX and CSS. Poised to contribute creative problem solving techniques,
           excellent interpersonal skills, and time management.</p>
            </div>
          </div>
          <div className="cardsCont">
           <Fade bottom>
           <div style={{ marginLeft : '47%', marginTop: '32.5%',  position: 'absolute',  width: "30%" , fontSize: "32px"}}><strong style={{ fontFamily: 'Poppins  sans-serif' , color:"white" }} >
             Technical Skills</strong></div>
           <div className="flipConts">
             <FlipCardOne
            marginLeft={"4%"}
            paddingRight={"5%"}
            backgroundColor={"white"}
            headerText={"Languages"}
            textOne={"HTML5"}
            textTwo={"CSS"}
            textThree={"Javascript"}
            textFour={"JSX"}
            TextFive={"Sass"}
          />
             <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"gray"}
            headerText={"Libraries"}
            textOne={"React"}
            textTwo={"jQuery"}
            textThree={"Bootstrap"}
          />
             <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"white"}
            headerText={"FrameWorks"}
            textOne={"Vue.js"}
            textTwo={"Node.js"}
            textThree={"Express"}
          />
             <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"gray"}
            headerText={"Databases"}
            textOne={"MySQL"}
            textTwo={"MongoDB"}
          />
             <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"white"}
            headerText={"Tools"}
            textOne={"GitHub"}
            textTwo={"Heroku"}
            textThree={"AWS"}
            textFour={"Robot3T"}
            TextFive={"SQL Workbench"}
            TextSix={"PowerBuild"}
          />
           </div>
           </Fade>
           </div>
             </div>
  )}