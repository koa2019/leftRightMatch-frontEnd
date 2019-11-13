// dependencies
// import axios from 'axios'
// import Nav from './components/Nav'
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NoMatch from './pages/NoMatch'
import Quiz from './pages/Quiz'
import FrontPage from "./pages/FrontPage"
import UserProfile from "./pages/UserProfile"
import Candidates from "./pages/Candidates"
import CandidateProfile from "./pages/CandidateProfile"
import LoginSignUp from "./pages/LoginSignup"
import Logout from "./pages/Logout"

// Needs sessions for Login/Signup

function App() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/candidates" component={Candidates} />
            <Route exact path="/candidates/:id" component={CandidateProfile} />
            <Route exact path="/candidatesprofile" component={CandidateProfile} />
            <Route exact path="/login" component={LoginSignUp} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/userprofile/:id" component={UserProfile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
