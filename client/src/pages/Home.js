import React from "react";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}

function Home() {
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
                                <a className="btn btn-info btn-lg" href="/signup" role="button">Sign
                                    Up</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className="btn btn-info btn-lg" href="/login" role="button">Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Home;  