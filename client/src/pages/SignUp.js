import React, { Component } from "react";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}

class SignUp extends Component {
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

        <div className="container text-info">
            <form id="signup" name="signup" method="post" action="/signup">
            <div className="row">
                <div className="col-md-4 col-xs-12">
                    <label for="firstname">First Name:</label>
                    <input className="text form-control" name="firstname" id="first-name-input" type="text" />
                    <br/>
                </div>
                <div className="col-md-4 col-xs-12">
                    <label for="lastname">Last Name:</label>
                    <input className="text form-control" name="lastname" id="last-name-input" type="text" />
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-xs-12">
                    <label for="email">Email Address:</label>
                    <input className="text form-control" id="email-input" name="email" type="email" />
                    <br/>
                </div>
                <div className="col-md-4 col-xs-12">
                    <label for="password">Password:</label>
                    <input className="text form-control" name="password" id="password-input" type="password" />
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <input className="btn btn-info" type="submit" id="signup-btn" value="Sign Up" />
                </div>
            </div>                
            </form>
        </div>
    </>
    )
}
}


export default SignUp;