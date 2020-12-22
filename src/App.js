import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Blog from './pages/Blog';
import About from './pages/About';
import Welcome from './pages/Welcome';
import SideBar from './components/SideBar'
import "./index.css";

function App() {
  return (
    <Router>
      <SideBar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
