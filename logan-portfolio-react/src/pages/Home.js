import React from "react";
import Hero from "../components/Hero";
import {Container , Row} from "../components/Grid";
import Col from "../components/Col";
import Contacts from "../components/Contacts";
import FlipCardOne from "../components/FlipCards";

function Home() {
  return (
    <div>
                <Contacts />
      <Hero/>
      <Container fixed style={{ marginTop: "12%" ,  backgroundColor: "#ECEFF1" }}>
        <Row>
          <Col size="md-12">
            {/* <h1 style={{borderTop:"solid 2px black" , width:"16%" , borderRight: "solid 2px black" }}>About Me</h1> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div style={{marginLeft:".5%"}}>
          <h1 style={{borderTop:"solid 2px black" , backgroundColor:"white" , borderRadius:"18px 18px 3px 3px" , width:"18%" , padding:"1%" , borderRight: "solid 2px black" ,margin:"0" , borderLeft:"solid 2px black" }}>About Me</h1>
          </div>
            <div style={{border:"solid black 1px", backgroundColor:"rgb(180, 179, 179)", height:"800px" , padding:"30px", borderRadius:"8px"}}>
            <div style={{border:"solid black 1px", backgroundColor: "white", height:"740px" ,padding: "30px" , borderRadius:"8px"}}>
            <p style={{fontSize:"23px" , fontFamily: 'Poppins  sans-serif'}}>I am a highly adaptable and detail-oriented web developer with extensive background in various coding languages, building responsive websites from front to back,
               and developing mobile applications. Specializes in JSX and CSS. Poised to contribute creative problem solving techniques, 
               excellent interpersonal skills, and time management </p>
            <p>   </p>
            <p style={{fontSize:"23px" , fontFamily: 'Poppins  sans-serif'}}>NorthWestern BootCamp Graduate with (1000+ hours) of intensive training focused on gaining technical skills in a variety of modern programming technologies and languages. </p>
               <div style={{textAlign:"center" , margin: "0 auto" , width:"100%" , fontSize:"32px"  , marginBottom:"3.5%"}}><strong style={{fontFamily: 'Poppins  sans-serif'  }} >Technical Skills</strong></div>
               <Col size={"xs-2"}>
               <FlipCardOne
               paddingRight={"25px"}
               backgroundColor={"red"}
               headerText={"Languages"}
               textOne={"HTML5"}
               textTwo={"CSS"}
               textThree={"Javascript"}
               textFour={"JSX"}
               TextFive={"Sass"}
               />
              <FlipCardOne
              marginLeft={"15px"}
               backgroundColor={"green"}
               headerText={"Libraries"}
               textOne={"React"}
               textTwo={"jQuery"}
               textThree={"Bootstrap"}
               />
              <FlipCardOne
               marginLeft={"15px"}
              backgroundColor={"blue"}
               headerText={"FrameWorks"}
               textOne={"Vue.js"}
               textTwo={"Node.js"}
               textThree={"Express"}
               />
              <FlipCardOne
               marginLeft={"15px"}
              backgroundColor={"purple"}
               headerText={"Databases"}
               textOne={"MySQL"}
               textTwo={"MongoDB"}
               />
              <FlipCardOne
               marginLeft={"15px"}
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
               {/* <Row fixed>
            <p style={{fontSize:"23px" , fontFamily: 'Poppins  sans-serif' }}>
              <div style={{textAlign:"center" , margin: "0 auto" , width:"100%" , marginBottom:"3.5%"}}><strong style={{fontFamily: 'Poppins  sans-serif'  }} >Technical Skills</strong></div>
              <div style={{display:"flexbox-grid"}}>
              <div style={{float:"left" , marginLeft:"25px"}}>
              <Col size={"xs-2"}>
                <FlipCardOne />
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px"}}>
              <Col size={"xs-2"}>
                <h4>Frameworks</h4>
                <div style={{border:"solid 1px black" , width:"150px"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>React</li>
                  <li style={{fontSize: "20px"}}>Bootstrap</li>
                  <li style={{fontSize: "20px"}}>jQuery</li>
                </ul>
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px" , width:"150px"}}>
              <Col size={"xs-2"}>
                <h4>Frameworks</h4>
                <div style={{border:"solid 1px black"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>Vue.js</li>
                  <li style={{fontSize: "20px"}}>Node.js</li>
                  <li style={{fontSize: "20px"}}>Express</li>
                </ul>
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px" , width:"150px"}}>
              <Col size={"xs-2"}>
                <h4>Databases</h4>
                <div style={{border:"solid 1px black"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>MySQL</li>
                  <li style={{fontSize: "20px"}}>MongoDB</li>
                </ul>
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px" , width:"150px"}}>
              <Col size={"xs-2"}>
                <h4>Tools </h4>
                <div style={{border:"solid 1px black"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>Github</li>
                  <li style={{fontSize: "20px"}}>Heroku</li>
                  <li style={{fontSize: "20px"}}>AWS</li>
                  <li style={{fontSize: "20px"}}>Robo3T</li>
                  <li style={{fontSize: "20px"}}>SQL Workbench</li>
                  <li style={{fontSize: "20px"}}>Powerbuilder</li>
                </ul>
              </Col>    
              </div>
              </div>
            </p>
            </Row> */}
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
