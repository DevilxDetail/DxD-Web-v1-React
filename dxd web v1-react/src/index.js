import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import FAQ from './views/faq'
import HomeV1 from './views/home-v1'
import PrivacyPolicy from './views/privacy-policy'
import HomeV2 from './views/home-v2'
import SpotlightTemplate from './views/spotlight-template'
import HomeV3 from './views/home-v3'
import Home from './views/home'
import TermsOfService from './views/terms-of-service'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={FAQ} exact path="/faq" />
        <Route component={HomeV1} exact path="/home-v1" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={HomeV2} exact path="/home-v2" />
        <Route component={SpotlightTemplate} exact path="/spotlight-template" />
        <Route component={HomeV3} exact path="/home-v3" />
        <Route component={Home} exact path="/" />
        <Route component={TermsOfService} exact path="/terms-of-service" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
