import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Blog from './pages/Blog';
import Awards from './pages/Awards';
import Welcome from './pages/Welcome';
import SideBar from './components/SideBar'
import "./index.css";

export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Welcome} />
          </Switch>
      <SideBar/>
      <React.StrictMode>
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/awards" component={Awards} />
          <Route exact path="/contact" component={Contact} />
          </React.StrictMode>
    </Router>
  );
}