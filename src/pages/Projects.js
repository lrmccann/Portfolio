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
      <div className="projectPage container-fixed">
        <div className="idk-yet container-fixed">
        <h1>Projects</h1>
        {(projectsToMap.map((item) => (
          <Fade right key={item.name}>
            <div id={"card-id-" + item.id} className="realCard">
              <img className="prjctImage" src={item.smallImage} alt="currently selected project"></img>
              <div className="infoHolder">
                <div>
                  <h3>{item.name}</h3>
                  <img src={require("../page-images/3-dots-img.jpg")} alt="three dots to display more options" id={item.name} onClick={(e) => (flipCards(e.target.id))}></img>
                </div>
                <div className="scripHolder">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </Fade>
        )))}
        </div>
      </div>
    )
  };
  if (cardsideTwo === true) {
    return (
      <div className="project-page-two container-fixed">
        <div className="project-div container-fixed" >
          <button onClick={flipCardsBack}><h4>Back</h4></button>
          <div className="imgAndAcompCont container-fixed">
            <div className="webBackgroundImg container">
              <img src={currentlySelectedProject.image} alt="currently selected project"></img>
            </div>
            <div className="acompCont container-fixed">
              <h3>Accomplishments</h3>
              <ul>
                <li>{currentlySelectedProject.acompOne}</li>
                <li>{currentlySelectedProject.acompTwo}</li>
                <li>{currentlySelectedProject.acompThree}</li>
                <li>{currentlySelectedProject.acompFour}</li>
              </ul>
            </div>
          </div>
          <div className="hashtagBar container-fixed">
            <span>
              <h4>Keywords:</h4>
            </span>
            <div>
              <h5>React</h5>
            </div>
          </div>
          <div className="linksForProject container-fixed">
            <div className="githubLinkCont">
              <a className="githubLinkBtn" href={currentlySelectedProject.githubLinkFE} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <img className="githubLinkImg" alt="Github Link" src={require("../page-images/github-lg.png")}></img>
                <h5 className="gitHubText">
                  Github
                  </h5>
              </a>
            </div>
            <div className="deploymentLinkCont">
              <a className="deploymentLinkBtn" href={currentlySelectedProject.deployedSite} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <img className="deploymentLinkImg" alt="Deployment Link" src={require("../page-images/web-lg.png")}></img>
                <h5 className="deploymentText">
                  Deployed App
                  </h5>
              </a>
            </div>
            <div className="awsS3BucketCont">
              <a href={currentlySelectedProject.awsS3Link} target="_blank" rel="noopener noreferrer" className="awsS3LinkBtn" style={{ color: 'black' }}>
                <img className="awsS3LinkImg" alt="aws S3 Bucket" src={require("../page-images/amazon-lg.png")}></img>
                <h5 className="awsS3Text">S3 Bucket</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };
};
