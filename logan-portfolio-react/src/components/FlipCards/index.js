import React, { useState } from "react";
import Col from "../Col";
import {Row} from "../Grid";
import "./style.css";

export default function FlipCardOne(props) {
  const [cardBefore , setCardBefore] = useState()
  const [cardLoaded, setCardLoaded] = useState(true)
  const [cardLoadedTwo, setCardLoadedTwo] = useState(false)
  console.log(props)
  function switchPictures(){
    // if(props.img2 === undefined){
    //   setUserPhotoLoaded(false)
    //   return(
    //     <div>Loading</div>
    //   )
    // } else{
    //   setUserPhoto(props.text)
      setCardLoaded(false)
      setCardLoadedTwo(true)
    //   console.log(props.img2)
    // }
  }
  function switchPicturesTwo(){
    if(cardLoaded === false){
      setCardLoaded(true)
    }
  }
  if(cardLoaded === true){
      console.log(props)
    return (
        <button className="flip-card-before" onClick={switchPictures} style={{backgroundColor:props.backgroundColor , marginLeft:props.marginLeft , paddingRight:props.paddingRight }}>
        {/* <Col size={"xs-2"}> */}
        <h6 style={{fontSize:"20px" , color:"white" , paddingRight:props.paddingRight }}>{props.headerText}</h6>
        {/* <div style={{border:"solid 1px black" , width:"150px"}}></div> */}
        {/* <ul style={{listStyle:"none"}}>
          <li style={{fontSize: "20px"}}>HTML5</li>
          <li style={{fontSize: "20px"}}>CSS</li>
          <li style={{fontSize: "20px"}}>JavaScript</li>
          <li style={{fontSize: "20px"}}>JSX</li>
          <li style={{fontSize: "20px"}}>Sass</li>
        </ul> */}
      {/* </Col>  */}
      </button>
    );
  } if(cardLoadedTwo === true){
    return (
        <button className="flip-card-after" onClick={switchPicturesTwo} style={{backgroundColor:"white" , marginLeft:props.marginLeft}} >
            {/* <Row fixed> */}
            {/* <p style={{fontSize:"23px" , fontFamily: 'Poppins  sans-serif' }}> */}
              {/* <div style={{textAlign:"center" , margin: "0 auto" , width:"100%" , marginBottom:"3.5%"}}><strong style={{fontFamily: 'Poppins  sans-serif'  }} >Technical Skills</strong></div> */}
              {/* <div style={{display:"flexbox-grid"}}> */}
              {/* <div style={{float:"left" , marginLeft:"25px"}}> */}
              {/* <Col size={"xs-2"}> */}
                {/* <h4>Languages</h4> */}
                {/* <div style={{border:"solid 1px black" , width:"150px"}}></div> */}
                <ul style={{listStyle:"none"}}>
                <li style={{ paddingRight:"50px"  ,fontSize: "20px"}}>{props.textOne}</li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}>{props.textTwo}</li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}>{props.textThree}</li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}>{props.textFour}</li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}>{props.textFive}</li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}>{props.textFive}</li>
                </ul>
              {/* </Col>  */}
              {/* </div> */}
              {/* <div style={{float:"left" , marginLeft:"40px"}}>
              <Col size={"xs-2"}>
                <h4>Libraries</h4>
                <div style={{border:"solid 1px black" , width:"150px"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>React</li>
                  <li style={{fontSize: "20px"}}>Bootstrap</li>
                  <li style={{fontSize: "20px"}}>jQuery</li>
                </ul>
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px" , width:"150px"}}>
              <Col size={"xs-2"}>
                <h4>Frameworks</h4>
                <div style={{border:"solid 1px black"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>Vue.js</li>
                  <li style={{fontSize: "20px"}}>Node.js</li>
                  <li style={{fontSize: "20px"}}>Express</li>
                </ul>
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px" , width:"150px"}}>
              <Col size={"xs-2"}>
                <h4>Databases</h4>
                <div style={{border:"solid 1px black"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>MySQL</li>
                  <li style={{fontSize: "20px"}}>MongoDB</li>
                </ul>
              </Col> 
              </div>
              <div style={{float:"left" , marginLeft:"40px" , width:"150px"}}>
              <Col size={"xs-2"}>
                <h4>Tools </h4>
                <div style={{border:"solid 1px black"}}></div>
                <ul style={{listStyle:"none"}}>
                  <li style={{fontSize: "20px"}}>Github</li>
                  <li style={{fontSize: "20px"}}>Heroku</li>
                  <li style={{fontSize: "20px"}}>AWS</li>
                  <li style={{fontSize: "20px"}}>Robo3T</li>
                  <li style={{fontSize: "20px"}}>SQL Workbench</li>
                  <li style={{fontSize: "20px"}}>Powerbuilder</li>
                </ul>
              </Col>    
              </div> */}
              {/* </div> */}  {/* this div    */}
            {/* </p> */}
            
            {/* </Row> */}
            </button>
            // </button>
    );
  }
}