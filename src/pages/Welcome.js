import * as React from "react";
// import "../images/port-pic.jpeg";
// import SideBar from "../components/SideBar";
import '../styleSheets/welcome.css'
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { useHistory } from 'react-router-dom';


export default function Welcome (){
  
  let history = useHistory();

  const homePage = () => {
    history.push('/home')
}

  return(
    <div className="container-fluid welcomeCont">
              <Bounce> 
        <button className="enterBtn" onClick={homePage}>
    <h3 style={{color: 'whitesmoke'}}>Enter</h3>
        </button>
        </Bounce>
      <div className="nameCont">
        <Fade right>
        <h1 className="firstNameCont">
          Logan
        </h1><b></b>
        <h1 className="lastNameCont">McCann</h1>
        </Fade>
        
      </div>
      {/* <div className="rightSide">
      </div> */}
    </div>
  )
}