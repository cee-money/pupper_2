import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Survey from "./pages/Survey";
import Match from "./pages/Match";
import Err from "./pages/Err";
import Footer from "./components/Footer";
import ChatApp from './components/ChatApp.js/index.js';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <div >
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/match" component={Match} />
        <Route exact path="/contact" component={ChatApp} />
        <Route component={Err} />
      </div>
      </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
