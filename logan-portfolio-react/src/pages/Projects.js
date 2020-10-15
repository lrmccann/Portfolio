import React, { Component, useEffect, useState } from "react";
import Card from "../components/Card";
import projects from "../projects.json"
import { Container, Row } from "../components/Grid";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";

export default function Projects(props) {

  const [projectsToMap, setProjectsToMap] = useState([])
  const [currentlySelectedProject, setCurrentlySelectedProject] = useState()
  const [cardsideOne, setCardSideOne] = useState(true)
  const [cardsideTwo, setCardSideTwo] = useState(false)
  useEffect(() => {
    // if(projects.length === 0){
      // return (<div>Loading</div>)
    // }if(projects.length !== null){
      setProjectsToMap(projects)
    // }
  }, [projects]
  )
  console.log(projectsToMap)
  // if(projectsToMap.length === 0 ){
    // alert("hello")
  // } if(projectsToMap.length !== 0){
    async function flipCards(id) {
     const index = projectsToMap.findIndex(p => p.name === id)
     setCurrentlySelectedProject(projectsToMap[index])
    //  if(currentlySelectedProject === undefined) {
    //  }if(currentlySelectedProject !== undefined){
       setCardSideOne(false)
       setCardSideTwo(true)
      //  console.log(currentlySelectedProject)
      console.log(currentlySelectedProject)
     }
  //  }
  function flipCardsBack() {
    setCardSideOne(true)
    setCardSideTwo(false)
  }
  if(cardsideOne === true){
    return (
      <Fade left>
      <div className="prjctPage">
        {(projectsToMap.map((item ) => (
          <div key={item.name}>
            {/* {console.log(key)} */}
            {/* {console.log(item.name)} */}
            <Container fluid>
              <div className="prjctCont">
                <button className="flipbtn" id={item.name} onClick={(e) => (flipCards(e.target.id))}><img id={item.name} onClick={(e) => (flipCards(e.target.id))} className="icon-btn" src="../images/info-icon.svg"></img></button>
                <div>
                  <h1 style={{ textAlign: "center", paddingTop: "1%" }}>{item.name}</h1>
                  <div style={{border: "solid black 1px"}}></div>
                  <h5 style={{padding:"3%" , fontSize:"15px"}}>{item.description}</h5>
                </div>
              </div>
  
            </Container>
          </div>
        )))}
      </div>
      </Fade>
    )
  }
  if(cardsideTwo === true){
    return (
      <div className="prjctPageTwo">
            <Container fixed>
            <button className="flipbtnTwo " onClick={flipCardsBack}><h2>X</h2></button>
              <div className="prjctContFlipped" >
                {/* <div style={{margin:"none"}}> */}
                <img className="video" src={currentlySelectedProject.image}></img>
                <button className="btn-primary linkbtn"> <a className="githalink" href={currentlySelectedProject.github} target="_blank"><p style={{fontSize:"20px" , marginTop:".5%"}}>Github</p></a></button>
                  <button className="btn-primary linkbtnTwo"><a className="githalink" href={currentlySelectedProject.deployed} target="_blank"><p style={{fontSize:"20px" , marginTop:".5%" }}>Deployment</p></a></button>
                </div>
              {/* </div> */}
            </Container>
          </div>
    )
  }

  // }


  {/* <div >
       <Container style={{ marginTop: 30 }}>
         <h1 className="text-center" style={{marginBottom:"3%", marginTop:"7%"}}>Projects</h1>
         <div style={{border:"solid 2px black", marginBottom:"5%"}}></div>
         <Row>
             {this.state.projects.map(project => ( 
              <Card 
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              github={project.github}
              deployed={project.deployed}
              />
            ))}
         </Row>
       </Container>
      </div> */}
}
