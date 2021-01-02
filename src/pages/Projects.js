import React, { useEffect, useState } from "react";
import projects from "../projects.json"
import Fade from "react-reveal/Fade";
import '../styleSheets/projects.css';
// import '../../public/images/github-link-img.png';

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
      <Fade right>
        <div className="prjctPage">
          {(projectsToMap.map((item) => (
            <div key={item.name}>
              <div className="container-fluid">
                <div className="prjctCont">
                  <button className="flipbtn" id={item.name} onClick={(e) => (flipCards(e.target.id))}>
                    <img id={item.name} alt="more info icon" onClick={(e) => (flipCards(e.target.id))}
                      className="icon-btn btn-sm" src="../images/3-dots-img.jpg"></img>
                    <img className="video" src={item.image} alt="currently selected project"></img>
                    <h1 className="projectsDesc">{projects.description}</h1>
                  </button>
                  {/* <div> */}
                  <h3 style={{ paddingLeft: '2.4%', paddingTop: "1%", color: 'black' }}>{item.name}</h3>
                  {/* <div style={{ border: "solid black 1px" }}></div> */}
                  <h5 style={{ paddingLeft: "3%", paddingRight: '3%', fontSize: "15px" }}>{item.description}</h5>
                  {/* </div> */}
                </div>
              </div>
            </div>
          )))}
        </div>
      </Fade>
    )
  }
  if (cardsideTwo === true) {
    return (
      <div className="prjctPageTwo">
        <div className="container randomCont">
          <button className="flipbtnTwo " onClick={flipCardsBack}><h2>X</h2></button>
          <div className="prjctContFlipped" >
            <div className="video">
              <div className="accomp">
                <h1 >asdlasjkd</h1>
                <h1>asdas</h1>
              </div>
              <img className="backgroundImg" src={currentlySelectedProject.image} alt="currently selected project"></img>
              </div>
          </div>
          {/* <button className="githubLink"></button> */}
        </div>
      </div>
    )
  }
}
