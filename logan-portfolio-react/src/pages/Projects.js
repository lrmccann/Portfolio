import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../projects.json"
// import Wrapper from "../components/Wrapper";
import {Container , Row} from "../components/Grid";
import Col from "../components/Col";

class Projects extends Component {
  state = {
   projects
  };

  render() {
    return (
      <div >
      <Container style={{ marginTop: 30 }}>
        <h1 className="text-center" style={{marginBottom:"3%", marginTop:"7%"}}>Projects</h1>
        <div style={{border:"solid 2px black", marginBottom:"5%"}}></div>
        <Row>
          {/* <Col size="md-12"> */}
            {/* <div className="wrapper"> */}
            {/* <Wrapper> */}
            {this.state.projects.map(project => (
              <Card
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              github={project.github}
              deployed={project.deployed}
              />
            ))}
           {/* </Col> */}
         </Row>
       </Container>
        {/* </Wrapper> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Projects;
