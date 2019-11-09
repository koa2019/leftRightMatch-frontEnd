// dependencies
// import {useAuth} from './utils/customHooks'
// import React, { useEffect } from 'react'
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import axios from 'axios'
import Nav from './components/Nav'
// import Footer from './components/Footer'
import NoMatch from './pages/NoMatch'
import Quiz from './pages/Quiz'
import FrontPage from "./pages/FrontPage"
import UserProfile from "./pages/UserProfile"
import CandidateProfile from "./pages/CandidateProfile"
import LoginSignUp from "./pages/LoginSignup"
import Logout from "./pages/Logout"

// Needs sessions for Login/Signup

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/userprofile" component={UserProfile} />
            {/* <Route exact path="/userprofile/:id" component={UserProfile} /> */}
            <Route exact path="/candidateprofile" component={CandidateProfile} />
            {/* <Route exact path="/candidateprofile/:id" component={CandidateProfile} /> */}
            <Route exact path="/login" component={LoginSignUp} />
            <Route path="/logout" component={Logout} />
            <Route component={NoMatch} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }

export default App;
