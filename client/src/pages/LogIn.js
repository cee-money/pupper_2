import React, { Component } from "react";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class LogIn extends Component {
    state = {
    }


render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary" id="signupjumbo">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper&nbsp;<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <a className="btn btn-info btn-lg" id="logout-btn "href="/" role="button">Home</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <div className="row text-info">
                <div className="col-md-4 col-xs-12">
                    <form id="signin" name="signin" method="post" action="signin">
                        <label for="email">Email Address:</label>
                        <input className="text form-control" name="email" type="text" />
                        <br/>
                        <label for="password">Password:</label>
                        <input className="text form-control" name="password" type="password" />
                        <br/>
                        <input className="btn btn-info" type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
}


export default LogIn;