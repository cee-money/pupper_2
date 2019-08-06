import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Survey from "./pages/Survey";
import AWS from "./pages/AWS";
// import Match from "./pages/Match";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div >
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/survey" component={Survey} />
        {/* <Route exact path="/match" component={Match} /> */}
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
