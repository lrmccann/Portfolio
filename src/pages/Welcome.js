/* eslint-disable semi */
import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import '../styleSheets/welcome.css';

export default function Welcome () {
  const history = useHistory()

  const homePage = () => {
    history.push('/home');
  }

  return (
    <div className="welcome-page container-fixed">
      <div className="welcome-cont container-fixed" onClick={homePage}>
        <div className="text-cont">
          <Fade right>
            <h1>Hi, I&apos;m Logan.</h1>
            <h2>I Design and Build User Interfaces.</h2>
          </Fade>
        </div>
      </div>
    </div>
  )
};
