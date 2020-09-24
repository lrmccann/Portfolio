import React from "react";
import "./style.css";

function Contacts() {
  return (
    <div className="hello">
    <div className="card side">
       {/* <div className="col-md-3 col-md-offset-1 sidebar"> */}
       <div>
        <h5 style={{marginBottom:"10%"}}>Where to find me</h5>
        </div>
        <div style={{marginLeft:"33%", marginBottom:"28%"}}>
        <a href="https://github.com/ishabali" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true" ></i></a> 
        </div>
        <div style={{marginLeft:"33%" , marginBottom:"28%"}}>
        <a href="www.linkedin.com/in/ishabali" target="_blank"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
        </div>
        <div style={{marginLeft:"33%"}}>
        <a href="https://stackoverflow.com/users/13091679/ishabali?tab=profile" target="_blank"><i className="fa fa-stack-overflow fa-3x" aria-hidden="true"></i></a>
        </div>
        </div>
    </div>
  );
}

export default Contacts;
