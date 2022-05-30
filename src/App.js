import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Players from './pages/Players'
import Education from './pages/Education'
import Counseling from './pages/Counseling'
import Lifeskills from './pages/Lifeskills'
import Signup from './pages/Signup'
import Sessions from './pages/Sessions'
import Visits from './pages/Visits'
import Admin from './pages/Admin'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/sessions">
              <Sessions />
            </Route>
            <Route path="/counseling">
              <Counseling />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/visits">
              <Visits />
            </Route>
            <Route path="/lifeskills">
              <Lifeskills />
            </Route>
            <Route path="/players">
              <Players />
            </Route>

            {/* Utilities */}
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
      </Router>
  
    </div>
    
  );
}

export default App;
