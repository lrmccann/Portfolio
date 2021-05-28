/* eslint-disable semi */
import * as React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { useHistory } from 'react-router-dom';
import '../styleSheets/welcome.css';

export default function Welcome (props) {
  const history = useHistory()

  const homePage = () => {
    localStorage.setItem('secretKey', 'lrm97');
    console.log(localStorage.getItem('secretKey'));
    history.push('/home');
  }
  // console.log()
  console.log(props);

  return (
    <div className="welcome-page container-fixed">
      <div className="welcome-cont container-fixed">
        <div className="text-cont">
          <Fade right>
            <h1>Hi, I&apos;m Logan.</h1>
            <h2>I Design and Build User Interfaces.</h2>
          </Fade>
        </div>
        <Flip left>
          <button className="navHomeBtn" onClick={homePage}><p className="navBtnText">Enter Site</p></button>
        </Flip>
      </div>
    </div>
  )
};
