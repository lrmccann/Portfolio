import React, { useState } from "react";
import Col from "../Col";
import {Row} from "../Grid";
import Wobble from 'react-reveal/Wobble';
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
        <div style={{ color:"black" , overflow:"hidden" }}><h6>{props.headerText}</h6></div>
      </button>
    );
  } if(cardLoadedTwo === true){
    return (
        <button className="flip-card-after" onClick={switchPicturesTwo} style={{backgroundColor:"white" , marginLeft:props.marginLeft}} >
                <ul style={{listStyle:"none" , border:"none"}}>
                  <Wobble>
                <li style={{ paddingRight:"50px"  ,fontSize: "20px" }}><h5>{props.textOne}</h5></li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}><h5>{props.textTwo}</h5></li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}><h5>{props.textThree}</h5></li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}><h5>{props.textFour}</h5></li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}><h5>{props.textFive}</h5></li>
                  <li style={{paddingRight:"50px"  , fontSize: "20px"}}><h5>{props.textFive}</h5></li>
                  </Wobble>   
                </ul>
            </button>
    );
  }
}