/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Welcome from './pages/Welcome';
import SideBar from './components/SideBar';
import './index.css';

export default function App () {
  const [clicked, setClicked] = useState(false);
  const idk = useState(localStorage.getItem('secretKey'))
  var WebFont = require('webfontloader');

  WebFont.load({
    google: {
      families: ['Open Sans', 'Semi-bold', 'Roboto']
    }
  });

  useEffect(() => {
    if (idk[0] === null) {
      console.log('its null')
      setClicked(false);
    } else if (idk[0] === 'lrm97') {
      console.log('its true')
      setClicked(true);
    }
  }, [idk])

  const trackingId = '2405172398';
  ReactGA.initialize(trackingId);
  // ReactGA.set({
  //   userId: auth.currentUserId(),
  // // any data that is relevant to the user session
  // // that you would like to track with google analytics
  // })

  const someCallback = (clickedHome) => {
    if (clickedHome === 'clicked') {
      setClicked(true);
    }
  }

  return (
    <>
      <Router>
        <React.StrictMode>
          {!clicked ? (
            <Route exact path='/' render={(props) => <Welcome {...props} someCallback = {someCallback} />}/>
          ) : (
            <>
              <SideBar />
              <Route exact path='/home' component={Home}/>
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/contact' component={Contact} />
            </>
          )}
        </React.StrictMode>
      </Router>
    </>
  );
}
