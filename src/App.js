import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Blog from './pages/Blog';
import Awards from './pages/Awards';
import Welcome from './pages/Welcome';
import SideBar from './components/SideBar';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";
import "./index.css";

export default function App() {
  let [loading , setLoading] = useState(true);
  let [color, setColor] = useState('#000000');

//   useEffect(()=> {
//     setTimeout(()=>{
//       setLoading(false);
//     }, 2100)
//   })

//   const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
//   margin-top: 18%;
// `;
  return (
    <>
    {
      // loading ?
      // <BounceLoader css={override} color={color} loading={loading} size={150} />
      // :
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
    }
    </>
  );
}