import React from "react";
import Hero from "../components/Hero";
import { Container, Row } from "../components/Grid";
import Col from "../components/Col";
import Contacts from "../components/Contacts";
import FlipCardOne from "../components/FlipCards";
import Photo from "../images/port-pic.jpeg";

function Home() {
  return (
    <div style={{ height: "1200px" }}>
      <Contacts />
      <Container fluid >
        <Row>
          <Col size="md-12">
            <div className="picContHome">
              <img className="myPicHome" src={Photo} alt="Picture of Logan McCann"></img>
            </div>
            <div className="textHome">
              <h1 style={{ color: "white", fontSize: "50px" }}>Get to know this guy ==></h1>
              <p style={{ fontSize: "20px", color: "gray", marginTop: "2%", width: "95%" }}>I am a highly adaptable and detail-oriented web developer with extensive background in various coding languages, building responsive websites from front to back,
              and developing mobile applications. Specializes in JSX and CSS. Poised to contribute creative problem solving techniques,
               excellent interpersonal skills, and time management</p>
            </div>
          </Col>
        </Row>
        <Row>
          <button onClick={"FIXTHISLATER"} className="buttonHome btn-primary"><p style={{ color: "white" }}>My Projects</p></button>
        </Row>
        <div style={{marginTop:"9%"}}>
        <Row fixed>
        <div style={{ textAlign: "center", margin: "0 auto", width: "100%", fontSize: "32px", marginBottom: "5%" }}><strong style={{ fontFamily: 'Poppins  sans-serif' , color:"white" }} >Technical Skills</strong></div>
        <Col size={"md-12"}>
          <FlipCardOne
            marginLeft={"4%"}
            paddingRight={"5%"}
            backgroundColor={"red"}
            headerText={"Languages"}
            textOne={"HTML5"}
            textTwo={"CSS"}
            textThree={"Javascript"}
            textFour={"JSX"}
            TextFive={"Sass"}
          />
          <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"green"}
            headerText={"Libraries"}
            textOne={"React"}
            textTwo={"jQuery"}
            textThree={"Bootstrap"}
          />
          <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"blue"}
            headerText={"FrameWorks"}
            textOne={"Vue.js"}
            textTwo={"Node.js"}
            textThree={"Express"}
          />
          <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"purple"}
            headerText={"Databases"}
            textOne={"MySQL"}
            textTwo={"MongoDB"}
          />
          <FlipCardOne
            marginLeft={"3%"}
            backgroundColor={"gray"}
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
        </div>
      </Container>
      </div>
  )
}

export default Home;
