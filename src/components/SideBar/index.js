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

export default function SideBar (props) {
  const location = useLocation().pathname;
  const history = useHistory();
  // state to store paths from router
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

  const [navStyle, setNavStyle] = useState();

  useEffect(() => {
    if (location === '/') {
      setNavStyle('hidden');
    } else if (location !== '/') {
      setNavStyle('visible');
    }
  }, [props])

  useEffect(() => {
    if (clicked === null) {
      setHomeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faHome} />);
      setProjectNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFolder} />);
      setBlogNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faBold} />);
      setResumeNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faFileAlt} />);
      setContactNavLink(<FontAwesomeIcon id="font-aws-icon" icon={faAddressBook} />);
      if (location === '/') {
        setHomeNavLink(<FontAwesomeIcon className="active-route-btn" id="font-aws-icon-two" icon={faHome} />);
      } else {
        checkRoute(location);
      }
    } else if (clicked === false) {
      return uncheckRoute(location);
    } else if (clicked === true) {
      checkRoute(location);
      return setClicked(false);
    }
  }, [clicked]);

  const checkRoute = (path) => {
    if (path === undefined || path === null) {
      alert('Error, please refresh page and try again');
    } else {
      if (path === '/home') {
        setHomeNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faHome}
          />
        );
      } else if (path === '/projects') {
        setProjectNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faFolder}
          />
        );
      } else if (path === '/resume') {
        setResumeNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faFileAlt}
          />
        );
      } else if (path === '/blog') {
        setBlogNavLink(
          <FontAwesomeIcon
            className="active-route-btn"
            id="font-aws-icon-two"
            icon={faBold}
          />
        );
      } else if (path === '/contact') {
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
    if (oldPath !== location) {
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
    }
  };
  const navPage = (routeName) => {
    setOldPath(location);
    setClicked(true);
    history.push(routeName);
  };

  return (
    <div className="navbar-container container-fixed" style={{ visibility: navStyle }}>
      <div className="icon-cont">
        <img
          alt="Logan McCann"
          src={require('../../page-images/canva-logo-2.png')}
        ></img>
      </div>
      <div className="nav-link-container">
        <button
          id="navbar-btn"
          onClick={() => {
            navPage('/home');
          }}
        >
          {homeNavLink}
        </button>
        <button
          id="navbar-btn"
          onClick={() => {
            navPage('/projects');
          }}
        >
          {projectNavLink}
        </button>
        <button
          id="navbar-btn"
          onClick={() => {
            navPage('/resume');
          }}
        >
          {resumeNavLink}
        </button>
        <button
          id="navbar-btn"
          onClick={() => {
            navPage('/blog');
          }}
        >
          {blogNavLink}
        </button>
        <button
          id="navbar-btn"
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
