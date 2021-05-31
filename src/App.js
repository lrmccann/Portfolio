/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ReactGA, { set } from 'react-ga';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Welcome from './pages/Welcome';
import SideBar from './components/SideBar';
import './index.css';

export default function App () {
  const [clicked, setClicked] = useState(null);
  const [navStyleState, setNavStyleState] = useState();
  var WebFont = require('webfontloader');

  WebFont.load({
    google: {
      families: ['Open Sans', 'Semi-bold', 'Roboto']
    }
  });

  // const trackingId = '2405172398';
  // ReactGA.initialize(trackingId);

  // ReactGA.set({
  //   userId: auth.currentUserId(),
  // // any data that is relevant to the user session
  // // that you would like to track with google analytics
  // })

  useEffect(() => {
    if (clicked) {
      setNavStyleState('visible');
    } else if (clicked === null) {
      setNavStyleState('hidden');
    }
  }, [clicked]);

  const hideNavbar = (styleAtt) => {
    if (styleAtt === 'visible') {
      return setClicked(true);
    }
  }

  return (
    <Router>
      <React.StrictMode>
        <Route exact path='/' render={(props) => <Welcome {...props} hideNavbar = {hideNavbar} />}/>
        <Switch>
          <SideBar navStyleAtt = {navStyleState} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </React.StrictMode>
    </Router>
  );
}
