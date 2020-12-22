import * as React from "react";
import "../images/port-pic.jpeg";
import SideBar from "../components/SideBar";
import '../styleSheets/welcome.css'


export default function Blog (){

  return(
    <div className="container-fixed homeCont">
      <SideBar />
      <div className="rightSide">
      </div>
    </div>

  )
}