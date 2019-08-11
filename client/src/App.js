import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth0 } from "./react-auth0-wrapper";
import Profile from "./pages/Profile";
import Survey from "./pages/Survey";
import Match from "./pages/Match";
import Err from "./pages/Err";
import Footer from "./components/Footer";
// import ChatApp from './components/ChatApp';
import Navbar from './components/NavBar'
import Contact from "./pages/Contact";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();

  return (
    <div>
    <Navbar />
    <Router>
      <div>
      <Switch>
        <Route exact path="/" render={(props) =>
        <Home {...props}
        isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout} user={user} loading={loading}
       />}/>
        <Route exact path="/profile" render={(props) =>
        <Profile {...props}
        isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout} user={user} loading={loading}
       />}/>
        <Route exact path="/survey" render={(props) =>
        <Survey {...props}
        isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout} user={user} loading={loading}
       />}/>
        <Route exact path="/match" render={(props) =>
        <Match {...props}
        isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout} user={user} loading={loading}
       />}/>
        <Route exact path="/contact" render={(props) =>
        <Contact {...props}
        isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout} user={user} loading={loading}
       />}/>
        <Route component={Err} />
      </Switch>
      </div>
    </Router>


    <Footer/>
    </div>
  );
}

export default App;
