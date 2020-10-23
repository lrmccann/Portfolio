import React, { useState } from "react";
import "../../images/left-carrot.png";
import "./style.css";

function Contacts() {

  const [unextended , setUnextended] = useState(true);
  const [extended , setExtended] = useState(false);


  function extend (){
    setExtended(true)
    setUnextended(false)
  }
  function unextend (){
    setExtended(false)
    setUnextended(true)
  }

  if(unextended === true){
    return(
      <div className="helloTwo">
        <button className="contact-btn btn-secondary" onClick={extend}><img className="carrot" src={require("../../images/left-carrot.png")} alt="open menu carrot" ></img></button>
        </div>
    )
}
if(extended === true){
  return (
    <div className="hello">
    <div className="card side">
       {/* <div className="col-md-3 col-md-offset-1 sidebar"> */}
       <div >
        <h5 style={{marginBottom:"10%"}}>Where to find me</h5>
        </div>
        <div style={{marginLeft:"33%", marginBottom:"28%"}}>
        <a href="https://github.com/lrmccann" target="_blank" rel="noopener noreferrer" alt="github icon" ><i className="fa fa-github fa-3x" aria-hidden="true" ></i></a> 
        </div>

        <div style={{marginLeft:"33%" , marginBottom:"28%"}}>
        <a href="https://www.linkedin.com/in/logan-mccann-381855155/" target="_blank" rel="noopener noreferrer" alt="linkedin icon"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
        </div>
        <div style={{marginLeft:"33%"}}>
        <a href="https://stackoverflow.com/users/13054714/lrmccann" target="_blank" rel="noopener noreferrer" alt="stack overflow icon"><i className="fa fa-stack-overflow fa-3x" aria-hidden="true" ></i></a>
        </div>
        </div>
        <div>
        <button className="carrot-btn" onClick={unextend}><img src={require("../../images/left-carrot.png")} className="carrotTwo" alt="close menu carrot"></img></button>
        {/* <div style={{marginLeft:"33%", marginBottom:"28%"}}>
        </div> */}
        </div>
    </div>
);
}
}
export default Contacts;
