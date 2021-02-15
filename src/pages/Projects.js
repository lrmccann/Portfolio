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
          <div className="something" key={item.name}>
            <Fade right>
              <div className="container-fluid" >
                <div className="prjctCont container-fixed">
                  <div className="flipbtn" id={item.name}>
                    <img id={item.name} alt="more info icon" onClick={(e) => (flipCards(e.target.id))}
                      className="icon-btn btn-sm" src="../images/3-dots-img.jpg"></img>
                    <img className="videoBeforeFlip" src={item.image} alt="currently selected project"></img>
                    <h1 className="projectsDesc">{projects.description}</h1>
                  </div>
                  <h3 style={{ paddingLeft: '2%', paddingTop: "2.5%", color: 'black' }}>{item.name}</h3>
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
      <div className="prjctPageTwo container-fixed">
        <div className="prjctContFlipped" >
          <button className="flipBtnTwo" onClick={flipCardsBack}><h4>Back</h4></button>
          <div className="prjctInfoCont container-fixed">
            <div className="webBackgroundImg">
              <img className="backgroundImg" src={currentlySelectedProject.image} alt="currently selected project"></img>
            </div>
            <div className="acompCont container">
              <h3 className="acompHeaderText">Accomplishments</h3>
              <ul className="acompList">
                <li className="acompText">{currentlySelectedProject.acompOne}</li>
                <li className="acompText">{currentlySelectedProject.acompTwo}</li>
                <li className="acompText">{currentlySelectedProject.acompThree}</li>
                <li className="acompText">{currentlySelectedProject.acompFour}</li>
              </ul>
            </div>
            </div>
            <div className="linksForProject container-fluid">
              <div className="githubLinkCont">
              <a className="githubLinkBtn" href={currentlySelectedProject.githubLinkFE} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                  <img className="githubLinkImg" alt="Github Link" src={require("../page-images/github-link-img-use.png")}></img>
                <h6 className="gitHubText">
                  Github
                  </h6>
                  </a>
              </div>
              <div className="deploymentLinkCont">
              <a className="deploymentLinkBtn" href={currentlySelectedProject.deployedSite} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                  <img className="deploymentLinkImg" alt="Deployment Link" src={require("../page-images/website-icon-num-2.png")}></img>
                <h4 className="deploymentText">
                    Deployed App
                  </h4>
                  </a>
              </div>
              <div className="awsS3BucketCont">
                <a href={currentlySelectedProject.awsS3Link} target="_blank" rel="noopener noreferrer" className="awsS3LinkBtn" style={{color: 'black'}}>  
                  <img className="awsS3LinkImg" alt="aws S3 Bucket" src={require("../page-images/aws-img-use-me.png")}></img>
                <h4 className="awsS3Text">S3 Bucket</h4>
                </a>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  };
};