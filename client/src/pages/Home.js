import React from "react";
import { Link } from "react-router-dom";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}

function Home(props) {
    return (
        <div className="jumbotron jumbotron-fluid bg-secondary" id="jumbo-main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper <i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                        <p className="lead text-white">Dog parks aren't always the best place to play. Let Pupper help you
                            arrange a playdate with the perfect match for your pup.</p>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                            {!props.isAuthenticated && (
                                <button onClick={() => props.loginWithRedirect({})}>Log in</button>
                            )}
                            {props.isAuthenticated && (
                                <>
                                <Link to="/profile">
                                    <a className="btn btn-info btn-lg text-white"  role="button">Profile</a>
                                </Link>
                                <Link to="/survey">
                                    <a className="btn btn-info btn-lg text-white"  role="button">Survey</a>
                                </Link>
                                </>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Home;  