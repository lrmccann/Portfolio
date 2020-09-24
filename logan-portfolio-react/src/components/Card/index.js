import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Col from "../Col";

function Card(props) {
  return (
    <Col size="md-4">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
             <div style={{textAlign:"center"}}> <strong style={{fontSize:"20px"}}>{props.name}</strong> </div>
             <div style={{border:"solid black 1px", width:"100%", marginTop:"9px" , marginBottom:"35px"}}></div>
            </li>
            <li>
              <button  style={{float:"right" , border:"solid black 2px" , width:"100px", height:"35px"}}><a href={props.github}><strong style={{color:"black"}}>Github</strong></a></button>
            </li>
            <li>
            <button style={{float:"left" , border:"solid black 2px" , width:"100px", height:"35px"}}><a href={props.deployed}><strong style={{color:"black"}}>URL</strong></a></button>
              {/* <strong>Deployed</strong> {props.deployed} */}
            </li>
          </ul>
        </div>
      </div>
    </Col>

  );
}

export default Card;
