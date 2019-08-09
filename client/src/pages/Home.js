import React from "react";
// import { Link } from "react-router-dom";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135,
    transform: "rotate(20deg)"
}

function Home(props) {
    return (
        <div className="jumbotron jumbotron-fluid bg-secondary" id="jumbo-main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                        <p className="lead text-white">Dog parks aren't always the best place to play. Let Pupper help you
                            arrange a playdate with the perfect match for your pup.</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Home;  