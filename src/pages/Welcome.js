import * as React from "react";
import '../styleSheets/welcome.css'
import Fade from "react-reveal/Fade";
import { useHistory } from 'react-router-dom';


export default function Welcome() {

  let history = useHistory();

  const homePage = () => {
    history.push('/home')
  }

  return (
    <div className="container-fixed welcomeCont" onClick={homePage}>
      <div className="nameCont">
        <Fade right>
          <h1>Hi, Im Logan</h1>
          <h2>I Design and Build User Interafces</h2>
        </Fade>
      </div>
    </div>
  )
}