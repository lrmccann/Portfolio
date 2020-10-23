import React from "react";
// import Wrapper from "../components/Wrapper";
import {Container} from "../components/Grid";
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