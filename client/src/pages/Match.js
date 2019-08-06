import React, { Component } from "react";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class Match extends Component {
    state = {
    }


render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper&nbsp;<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                        <br/>
                        <h3 className="text-white">Tell us what you're looking for in a pupper playmate.</h3>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <a className="btn btn-info btn-lg" id="logout-btn "href="/logout" role="button">Logout</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container bg-active text-info" id="filters">
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h3><i className="fas fa-paw"></i><strong>&nbsp;About Them</strong></h3>
                </div>
            </div>
            <br/>
            <form>

            <div className="row">
                <div className="col-12">
                    <h5>Select an answer to each question below.</h5>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="match-q1">I am looking to meet dogs that are:</label>
                    <select className="form-control form-group col-md-6 match-questions" id="match-q1">
                        <option value="Small">Small (under 25 lbs)</option>
                        <option value="Medium">Medium (between 25-50 lbs)</option>
                        <option value="Large">Large (over 50 lbs)</option>
                    </select>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="match-q2">I want to meet dogs with lots of energy!</label>
                    <select className="form-control form-group col-md-6 match-questions" id="match-q2">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="match-q3">My dog plays well with dominant dogs.</label>
                    <select className="form-control form-group col-md-6 match-questions" id="match-q3">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="submit" data-toggle="modal" className="btn btn-info" id="find-match">Find Match</button>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

        <div className="container" id="show-matches">
            <div className="row" id="match-card-row"></div>
        </div>

        <div className="container text-info bg-active">
            <div className="row">
                <div className="col-12">
                    <div className="modal fade" id="bork-box" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title" id="title"><i className="fas fa-paw"></i>&nbsp;&nbsp;Bork at your match</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <form method="POST" action="send">
                                <div className="form-group">
                                    <label>Your First Name</label>
                                    <input className="form-control col-md-4" type="text" name="name" id="modalname"/>
                                    <br/>
                                        <label>Your Email Address</label>
                                    <input className="form-control col-md-8" type="email" name="email" id="modalemail"/>
                                    <br/>  
                                    <label for="contactbox">Your Bork</label>
                                    <textarea className="form-control col-md-12" type="text" name="message" id="contactbox" rows="5">My pup would love to meet yours!</textarea>
                                    <br/>
                                </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-info" type="sumbit" id="send">Bork!</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
}

export default Match;