import React, { useEffect, useState } from "react";
import projects from "../projects.json"
import Fade from "react-reveal/Fade";
import '../styleSheets/projects.css';

export default function Projects(props) {

  const [projectsToMap, setProjectsToMap] = useState([])
  const [currentlySelectedProject, setCurrentlySelectedProject] = useState()
  const [cardsideOne, setCardSideOne] = useState(true)
  const [cardsideTwo, setCardSideTwo] = useState(false)
  useEffect(() => {
    setProjectsToMap(projects)
  }, []
  )
  async function flipCards(id) {
    const index = projectsToMap.findIndex(p => p.name === id)
    setCurrentlySelectedProject(projectsToMap[index])
    setCardSideOne(false)
    setCardSideTwo(true)
  }
  function flipCardsBack() {
    setCardSideOne(true)
    setCardSideTwo(false)
  }
  if (cardsideOne === true) {
    return (
      <Fade left>
        <div className="prjctPage">
          {(projectsToMap.map((item) => (
            <div key={item.name}>
              <div className="container-fluid">
                <div className="prjctCont">
                  <button className="flipbtn" id={item.name} onClick={(e) => (flipCards(e.target.id))}>
                    {/* <img id={item.name} alt="more info icon" onClick={(e) => (flipCards(e.target.id))} 
                    className="icon-btn" src="../images/info-icon.svg"></img> */}
                                <img className="video" src={item.image} alt="currently selected project"></img>
                                <h1 className="projectsDesc">{projects.description}</h1>

                    
                    
                    
                    
                    </button>









                  {/* <div>
                    <h1 style={{ textAlign: "center", paddingTop: "1%" }}>{item.name}</h1>
                    <div style={{ border: "solid black 1px" }}></div>
                    <h5 style={{ padding: "3%", fontSize: "15px" }}>{item.description}</h5>
                  </div> */}
                </div>
              </div>
            </div>
          )))}
        </div>
      </Fade>
    )
  }
  // if (cardsideTwo === true) {
  //   return (
  //     <div className="prjctPageTwo">
  //       <div className="container">
  //         <button className="flipbtnTwo " onClick={flipCardsBack}><h2>X</h2></button>
  //         <div className="prjctContFlipped" >
  //           <img className="video" src={currentlySelectedProject.image} alt="currently selected project"></img>
  //           <button className="btn-primary linkbtn"> <a className="githalink" href={currentlySelectedProject.github} target="_blank" rel="noopener noreferrer"><p style={{ fontSize: "20px", marginTop: ".5%" }}>Github</p></a></button>
  //           <button className="btn-primary linkbtnTwo"><a className="githalink" href={currentlySelectedProject.deployed} target="_blank" rel="noopener noreferrer"><p style={{ fontSize: "20px", marginTop: ".5%" }}>Deployment</p></a></button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
}
