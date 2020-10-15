import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../projects.json"
// import Wrapper from "../components/Wrapper";
import {Container , Row} from "../components/Grid";
import Col from "../components/Col";
import "../images/resume-img.png";
import "../index.css";

export default function () {




    return(
        <div className="resumecont">
        <Container>
            <div style={{height:"825px" , width:"100%" }}>
            <img style={{height:"750px" , marginTop:"5%" , marginLeft:"20%"}} src={require('../images/resume-img.png')} alt="My Resume"></img>
            </div>
            </Container>
            </div>
    )





}