import * as React from "react";
import "../images/port-pic.jpeg";
import SideBar from "../components/SideBar";
import '../styleSheets/welcome.css'


export default function Welcome (){

  return(
    <div className="container-fluid homeCont">
      <SideBar />
      <div className="rightSide">
      </div>
    </div>
  )
}