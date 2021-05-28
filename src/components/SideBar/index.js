/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFolder,
  faFileAlt,
  faBold,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function SideBar () {
  const location = useLocation().pathname;
  const history = useHistory();
  // state to store paths from router
  const [currentPath, setCurrentPath] = useState();
  const [oldPath, setOldPath] = useState();
  // state to set loading and when the user clicks to navigate
  // const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(null);
  // state for the content of each button
  const [homeNavLink, setHomeNavLink] = useState();
  const [projectNavLink, setProjectNavLink] = useState();
  const [blogNavLink, setBlogNavLink] = useState();
  const [resumeNavLink, setResumeNavLink] = useState();
  const [contactNavLink, setContactNavLink] = useState();

  useEffect(() => {
    if (clicked === null) {
      setOldPath(location);
      setCurrentPath(`'${location}'`);
      setHomeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faHome} />);
      setProjectNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFolder} />);
      setBlogNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faBold} />);
      setResumeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFileAlt} />);
      setContactNavLink(
        <FontAwesomeIcon id="font-aws-icon" icon={faAddressBook} />
      );
      if (currentPath === undefined || currentPath === null) {
        return checkRoute(location);
      }
    } else if (clicked === false) {
      setOldPath(location);
      return uncheckRoute(location);
    } else if (clicked === true) {
      checkRoute(location);
      // setLoading(false);
      return setClicked(false);
    }
  }, [clicked]);

  const checkRoute = (thePath) => {
    if (thePath === undefined || thePath === null) {
      alert('Error, please refresh page and try again');
    } else {
      if (thePath === '/home') {
        setHomeNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faHome}
          />
        );
      } else if (thePath === '/projects') {
        setProjectNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faFolder}
          />
        );
      } else if (thePath === '/resume') {
        setResumeNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faFileAlt}
          />
        );
      } else if (thePath === '/blog') {
        setBlogNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faBold}
          />
        );
      } else if (thePath === '/contact') {
        setContactNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faAddressBook}
          />
        );
      }
    }
  };

  const uncheckRoute = () => {
    if (oldPath === '/home') {
      setHomeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faHome} />);
    } else if (oldPath === '/projects') {
      setProjectNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFolder} />);
    } else if (oldPath === '/resume') {
      setResumeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFileAlt} />);
    } else if (oldPath === '/blog') {
      setBlogNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faBold} />);
    } else if (oldPath === '/contact') {
      setContactNavLink(
        <FontAwesomeIcon id="font-aws-icon" icon={faAddressBook} />
      );
    }
  };

  // HOME BTN FUNC
  // const hoverHomeLink = (e) => {
  //   e.preventDefault();
  //   if (currentPath === '/home') {
  //     console.log('disbaled func')
  //   } else {
  //     setHomeNavLink(<h5 id="navbar-text">Home</h5>);
  //   }
  // };
  // const resetHomeLink = (e) => {
  //   e.preventDefault();
  //   setHomeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faHome} />);
  // };
  // PROJECTS BTN FUNC
  // const hoverProjectLink = (e) => {
  //   e.preventDefault();
  //   setProjectNavLink(<h5 id="navbar-text">Projects</h5>);
  // };
  // const resetProjectLink = (e) => {
  //   e.preventDefault();
  //   setProjectNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFolder} />);
  // };
  // RESUME BTN FUNC
  // const hoverResumeLink = (e) => {
  //   e.preventDefault();
  //   setResumeNavLink(<h5 id="navbar-text">Resume</h5>);
  // };
  // const resetResumeLink = (e) => {
  //   e.preventDefault();
  //   setResumeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFileAlt} />);
  // };
  // BLOG BTN FUNC
  // const hoverBlogLink = (e) => {
  //   e.preventDefault();
  //   setBlogNavLink(<h5 id="navbar-text">Blog</h5>);
  // };
  // const resetBlogLink = (e) => {
  //   e.preventDefault();
  //   setBlogNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faBold} />);
  // };
  // CONTACT BTN FUNC
  // const hoverContactLink = (e) => {
  //   e.preventDefault();
  //   setContactNavLink(<h5 id="navbar-text">Contact</h5>);
  // };
  // const resetContactLink = (e) => {
  //   e.preventDefault();
  //   setContactNavLink(
  //     <FontAwesomeIcon id="font-aws-icon" icon={faAddressBook} />
  //   );
  // };

  const navPage = (routeName) => {
    setCurrentPath(`'${routeName}'`);
    setClicked(true);
    history.push(routeName);
  };

  return (
    <div className="navbar-container container-fixed">
      <div className="icon-cont">
        <img
          alt="Logan McCann"
          src={require('../../page-images/canva-logo-2.png')}
        ></img>
      </div>
      <div className="nav-link-container">
        <button
          id="navbar-btn"
          // onMouseEnter={hoverHomeLink}
          // onMouseLeave={resetHomeLink}
          onClick={() => {
            navPage('/home');
          }}
        >
          {homeNavLink}
        </button>
        <button
          id="navbar-btn"
          // onMouseEnter={hoverProjectLink}
          // onMouseLeave={resetProjectLink}
          onClick={() => {
            navPage('/projects');
          }}
        >
          {projectNavLink}
        </button>
        <button
          id="navbar-btn"
          // onMouseEnter={hoverResumeLink}
          // onMouseLeave={resetResumeLink}
          onClick={() => {
            navPage('/resume');
          }}
        >
          {resumeNavLink}
        </button>
        <button
          id="navbar-btn"
          // onMouseEnter={hoverBlogLink}
          // onMouseLeave={resetBlogLink}
          onClick={() => {
            navPage('/blog');
          }}
        >
          {blogNavLink}
        </button>
        <button
          id="navbar-btn"
          // onMouseEnter={hoverContactLink}
          // onMouseLeave={resetContactLink}
          onClick={() => {
            navPage('/contact');
          }}
        >
          {contactNavLink}
        </button>
      </div>
      <div className="social-media-link-container">
        <div id="social-media-btn" className="myGithubBtn">
          <a
            id="social-media-link"
            href="https://github.com/lrmccann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="social-media-icon"
              alt="Github Link"
              src={require('../../page-images/github-mini-img.png')}
            ></img>
          </a>
        </div>
        <div id="social-media-btn" className="myMediumBtn">
          <a
            id="social-media-link"
            href="https://medium.com/@loganrmccann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="social-media-icon"
              alt="Medium Link"
              src={require('../../page-images/medium-icon2.png')}
            ></img>
          </a>
        </div>
        <div id="social-media-btn" className="mylinkedInBtn">
          <a
            id="social-media-link"
            href="https://www.linkedin.com/in/logan-mccann-381855155/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="social-media-icon"
              alt="LinkedIn Link"
              src={require('../../page-images/linkedin-icon2.png')}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
