// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// import './components/SideBar/style.css';

// import Projects from "./pages/Projects";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import Blog from './pages/Blog';
// import Awards from './pages/Awards';
// import Welcome from './pages/Welcome';
// import SideBar from './components/SideBar';

// import { BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
// import { faHome, faFolder, faFileAlt, faTrophy, faBold, faAddressBook } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// const routing = (
//     <React.StrictMode>
//         <Router>
//         <Switch>
//             <Route exact path="/" component={App} />
//             </Switch>
//             <div className="newNavBar">
//                 <ul>
//                     <li>
//                         <NavLink exact activeClassName='active' to='/home'>
//                             {/* <h1>Home</h1> */}
//                             {/* <button className="homeBtn" id="navBarBtn" > */}
//                     <FontAwesomeIcon id="fontAwsIcon" icon={faHome} />
//                 {/* </button> */}
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//             <SideBar />
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/projects" component={Projects} />
//           <Route exact path="/resume" component={Resume} />
//           <Route exact path="/blog" component={Blog} />
//           <Route exact path="/awards" component={Awards} />
//           <Route exact path="/contact" component={Contact} />
//         </Router>
//     </React.StrictMode>
// )

// ReactDOM.render(
// routing,
// document.getElementById("root")
// );





import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));