import * as React from "react";
// import "../images/port-pic.jpeg";
import SideBar from "../components/SideBar";
import '../styleSheets/blog.css';


export default function Blog (){

  return(
    <div className="container-fixed blogCont">
      <SideBar />
      <div className="blogRightSide">
        <h2 className="dateTextOne">January 2021</h2>
        <ul style={{color : 'whitesmoke'}}>
        <li id="blogItem"> <a style={{color: 'whitesmoke'}} href="#"> Javascript 2020 (Concepts to know) </a></li>
        <li id="blogItem"><a style={{color: 'whitesmoke'}} href="#"> Amazon Web Services Fundamentals </a></li>
        <li id="blogItem"><a style={{color: 'whitesmoke'}} href="#"> MySQL Fundamentals </a></li>
        <li id="blogItem"><a style={{color: 'whitesmoke'}} href="#"> Understanding Expo (The easy way to mobile) </a></li>
        </ul>
        <h2 className="dateTextTwo">December 2020</h2>
        <ul style={{color : 'whitesmoke'}}>
        <li id="blogItem"><a style={{color: 'whitesmoke'}} href="#"> React State </a></li>
        <li id="blogItem"><a style={{color: 'whitesmoke'}} href="#">React Props </a></li>
        <li id="blogItem"><a style={{color: 'whitesmoke'}} href="#"> React 2020 (Concepts to know) </a></li>
        </ul>
      </div>
    </div>

  )
}