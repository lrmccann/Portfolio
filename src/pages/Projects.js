/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Truncate from 'react-truncate';
import projects from '../projects.json';
import '../styleSheets/projects.css';

export default function Projects () {
  const [projectsToMap, setProjectsToMap] = useState([]);
  const [currentlySelectedProject, setCurrentlySelectedProject] = useState();
  const [cardsideOne, setCardSideOne] = useState(true);
  const [cardsideTwo, setCardSideTwo] = useState(false);

  useEffect(() => {
    setProjectsToMap(projects);
  }, []);

  async function flipCards (id) {
    const index = projectsToMap.findIndex((p) => p.name === id);
    setCurrentlySelectedProject(projectsToMap[index]);
    setCardSideOne(false);
    setCardSideTwo(true);
  }

  function flipCardsBack () {
    setCardSideOne(true);
    setCardSideTwo(false);
  }

  if (cardsideOne === true) {
    return (
      <div className="project-page container-fixed">
        <div className="margin-cont container-fixed">
          <h1 id="project-header">Projects</h1>
          {projectsToMap.map((item) => (
            <Fade right key={item.name}>
              <div id={'card-id-' + item.id} className="project-card">
                <img
                  className="project-image"
                  src={item.smallImage}
                  alt="currently selected project"
                ></img>
                <div className="card-bottom">
                  <div>
                    <h3 id="project-title">{item.name}</h3>
                    <img
                      src={require('../page-images/3-dots-img.jpg')}
                      alt="three dots to display more options"
                      id={item.name}
                      onClick={(e) => flipCards(e.target.id)}
                    ></img>
                  </div>
                  <div className="project-desc-cont">
                    <Truncate lines={2}>
                      <p id="description-text">{item.description}</p>
                    </Truncate>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
  if (cardsideTwo === true) {
    return (
      <div className="project-page-two container-fixed">
        <div className="project-div container-fixed">
          <button id="exit-btn" onClick={flipCardsBack}>
            <h4>Back</h4>
          </button>
          <div className="img-accomp-cont container-fixed">
            <div className="project-img-cont container-fixed">
              <img
                id="prjct-img-lg"
                src={currentlySelectedProject.image}
                alt="currently selected project"
              ></img>
            </div>
            <div className="acomp-cont container-fixed">
              <h3 id="acomp-header">Accomplishments</h3>
              <ul id="acomp-list">
                <li id="acomp-item">{currentlySelectedProject.acompOne}</li>
                <li id="acomp-item">{currentlySelectedProject.acompTwo}</li>
                <li id="acomp-item">{currentlySelectedProject.acompThree}</li>
                <li id="acomp-item">{currentlySelectedProject.acompFour}</li>
              </ul>
            </div>
          </div>
          <div className="hashtag-bar container-fixed">
            <span id="hashtag-span">
              <h6 id="keywords-header">NPMs</h6>
            </span>
            <div>
              {/* {currentlySelectedProject.packagesFE.split(',').map((npmText, myKey) => (
                <h5 key={myKey} id="hashtag-list">{`${npmText},`}</h5>
              ))} */}
              <h5 id="hashtag-list">{`${currentlySelectedProject.packagesFE}`}</h5>
              {/* FOR BE PACKAGES */}
              {/* <h5 id="hashtag-list">{`${currentlySelectedProject.packagesBE}`}</h5> */}
            </div>
          </div>
          <div className="link-bar container-fixed">
            <div id="link-btn-cont">
              <a
                id="link-btn"
                href={currentlySelectedProject.githubLinkFE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="link-img"
                  alt="Github Link"
                  src={require('../page-images/github-lg-two.png')}
                ></img>
              </a>
            </div>
            <div id="link-btn-cont">
              <a
                id="link-btn"
                href={currentlySelectedProject.deployedSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="link-img"
                  alt="Deployment Link"
                  src={require('../page-images/web-lg-two.png')}
                ></img>
              </a>
            </div>
            <div id="link-btn-cont">
              <a
                id="link-btn"
                href={currentlySelectedProject.awsS3Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="link-img"
                  alt="aws S3 Bucket"
                  src={require('../page-images/amazon-lg-two.png')}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
