import React from "react";
import { Container, Row } from "../components/Grid";
import Col from "../components/Col";
import Contacts from "../components/Contacts";
import FlipCardOne from "../components/FlipCards";
import "../images/port-pic.jpeg";
import Fade from "react-reveal/Fade";
import ProjectsBtn from "../components/Button";
// import style from "./index.css";

function Home(props) {
  return (
    <div style={{ height: "1200px" }}>
      <Contacts>
        {console.log(props)}
      </Contacts>
      <Container fluid >
        <Row>
          <Col size="md-12">
            <Fade top>
            <div className="picContHome">
              <img className="myPicHome" src={require("../images/port-pic.jpeg")} alt="Logan McCann"></img>
              <div style={{display:"flex-box"}}>
              {/* <h4 style={{color: "white" , marginLeft:"28%"}}>Contact info</h4> */}
              <h6 style={{color:"white" , marginLeft:"5%"}}>Email : <a href="loganrmccann@gmail.com">Click Me</a></h6>
              <h6 style={{color:"white" , marginLeft:"5%"}}>GitHub : <a href="https://github.com/lrmccann">Click Me</a></h6>
              <h6 style={{color:"white" , marginLeft:"5%"}}>linkedin : <a href="https://www.linkedin.com/in/logan-mccann-381855155/">Click Me</a></h6>
              </div>
            </div>
            <div className="textHome">
              <h1 style={{ color: "white", fontSize: "50px" }}>Get to know this guy ==></h1>
              <p style={{ fontSize: "23px", color: "white", marginTop: "2%", width: "95%" }}>I am a highly adaptable and detail-oriented web developer with extensive background in various coding languages, building responsive websites from front-end to back-end,
              and developing mobile applications. Specializes in JSX and CSS. Poised to contribute creative problem solving techniques,
               excellent interpersonal skills, and time management</p>
            </div>
            </Fade>
          </Col>
        </Row>
        <Row>
          {/* <button onClick={"FIXTHISLATER"} className="buttonHome btn-primary"><p style={{ color: "white" }}>My Projects</p></button> */}
          <ProjectsBtn />
        </Row>
        <div style={{marginTop:"9%"}}>
        <Fade bottom>
        <Row fixed>
        <div style={{ textAlign: "center", margin: "0 auto", width: "100%", fontSize: "32px", marginBottom: "5%" }}><strong style={{ fontFamily: 'Poppins  sans-serif' , color:"white" }} >Technical Skills</strong></div>
        <Col size={"md-12"}>
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
        </Col>
        </Row>
        </Fade>
        </div>
      </Container>
      </div>
  )
}

export default Home;
