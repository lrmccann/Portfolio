import React, { useEffect, useState } from "react";
import projects from "../projects.json"
import Fade from "react-reveal/Fade";
import '../styleSheets/projects.css';

export default function Projects() {

  const [projectsToMap, setProjectsToMap] = useState([]);
  const [currentlySelectedProject, setCurrentlySelectedProject] = useState();
  const [cardsideOne, setCardSideOne] = useState(true);
  const [cardsideTwo, setCardSideTwo] = useState(false);
  useEffect(() => {
    setProjectsToMap(projects)
  }, []
  );
  async function flipCards(id) {
    const index = projectsToMap.findIndex(p => p.name === id)
    setCurrentlySelectedProject(projectsToMap[index]);
    setCardSideOne(false);
    setCardSideTwo(true);
  };
  function flipCardsBack() {
    setCardSideOne(true);
    setCardSideTwo(false);
  };
  if (cardsideOne === true) {
    return (
      <div className="prjctPage container-fixed">
        {(projectsToMap.map((item) => (
          <div key={item.name}>
            <Fade right>
              <div className="container-fluid">
                <div className="prjctCont">
                  <div className="flipbtn" id={item.name}>
                    <img id={item.name} alt="more info icon" onClick={(e) => (flipCards(e.target.id))}
                      className="icon-btn btn-sm" src="../images/3-dots-img.jpg"></img>
                    <img className="videoBeforeFlip" src={item.image} alt="currently selected project"></img>
                    <h1 className="projectsDesc">{projects.description}</h1>
                  </div>
                  <h3 style={{ paddingLeft: '2%', paddingTop: "4.5%", color: 'black' }}>{item.name}</h3>
                  <h5 style={{ paddingLeft: "3%", paddingRight: '3%', fontSize: "15px" }}>{item.description}</h5>
                </div>
              </div>
            </Fade>
          </div>
        )))}
      </div>
    )
  };
  if (cardsideTwo === true) {
    return (
      <div className="prjctPageTwo container">
        <div className="prjctContFlipped" >
          <button className="flipBtnTwo" onClick={flipCardsBack}><h4>Back</h4></button>
          <div className="prjctInfoCont">
            <div className="webBackgroundImg">
              <img className="backgroundImg" src={currentlySelectedProject.image} alt="currently selected project"></img>
            </div>
            <div className="acompCont">
              <h3 className="acompHeaderText">Accomplishments</h3>
              <ul className="acompList">
                <li className="acompText">{currentlySelectedProject.acompOne}</li>
                <li className="acompText">{currentlySelectedProject.acompTwo}</li>
                <li className="acompText">{currentlySelectedProject.acompThree}</li>
                <li className="acompText">{currentlySelectedProject.acompFour}</li>
              </ul>
            </div>
            <div className="linksForProject">
              <div className="githubLinkCont">
                <button className="githubLinkBtn"><img className="githubLinkImg" alt="Github Link" src={require("../page-images/github-link-img-use.png")}></img></button>
                <h5 className="gitHubText"><a href={currentlySelectedProject.githubLinkFE} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>Github Link</a></h5>
              </div>
              <div className="deploymentLinkCont">
                <button className="deploymentLinkBtn"><img className="deploymentLinkImg" alt="Deployment Link" src={require("../page-images/deployment-img-use.png")}></img></button>
                <h5 className="deploymentText"><a href={currentlySelectedProject.deployedSite} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>Deployment Site</a></h5>
              </div>
              <div className="awsS3BucketCont">
                <button className="awsS3LinkBtn"><img className="awsS3LinkImg" alt="aws S3 Bucket" src={require("../page-images/aws-img-use-me.png")}></img></button>
                <h5 className="awsS3Text"><a href={currentlySelectedProject.awsS3Link} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>S3 Bucket</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};