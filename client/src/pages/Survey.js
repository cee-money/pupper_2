import React, { Component } from "react";
import LogoutBtn from "../components/LogoutBtn";


const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class Survey extends Component {
    state = {
    }

    // in the handleFormSubmit method, we want to bundle up the the user.name, user.email with the survey responses


render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary" id= "mainsurveyjumbo">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12" id="tellustext">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper&nbsp;<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                        <br/>
                        <h3 className="text-white">Tell us about you and your pup.</h3>
                    </div>
                    <LogoutBtn />
                </div>
            </div>
        </div>

        <div className="container bg-active text-info">
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h3><i className="fas fa-paw"></i><strong>&nbsp;About You</strong></h3>
                </div>
            </div>
            <br/>
            <form id="main-form">
            <div className="row">
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="name">Your Pupper's Name*</label>
                    <input type="text" className="form-control" id="dog-name" required/>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="dog-photo" id="file-name">URL of Your Pupper's Photo</label>
                    <input type="text" className="form-control" id="dog-photo" name="image"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <small>* indicates required field</small>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-12">
                    <h5>Select an answer to each question below.</h5>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q1">What size would you consider your dog?</label>
                    <select className="form-control form-group col-md-6 questions" id="q1">
                        <option value="Small">Small (under 25 lbs)</option>
                        <option value="Medium">Medium (between 25-50 lbs)</option>
                        <option value="Large">Large (over 50 lbs)</option>
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q2">Is your dog family friendly?</label>
                    <select className="form-control form-group col-md-6 questions" id="q2">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q3">My dog has lots of energy. They can keep playing all day long!</label>
                    <select className="form-control form-group col-md-6 questions" id="q3">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q4">My dogs favorite position is asleep on the couch.</label>
                    <select className="form-control form-group col-md-6 questions" id="q4">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q5">My dog is skittish around new people.</label>
                    <select className="form-control form-group col-md-6 questions" id="q5">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q6">My dog is skittish around large groups of dogs.</label>
                    <select className="form-control form-group col-md-6 questions" id="q6">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q7">My dog does well around dogs that are larger than them.</label>
                    <select className="form-control form-group col-md-6 questions" id="q7">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q8">My dog does well around dogs that are smaller than them.</label>
                    <select className="form-control form-group col-md-6 questions" id="q8">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q9">My dog has alpha tendency.</label>
                    <select className="form-control form-group col-md-6 questions" id="q9">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q10">My dog does not like to share their toys.</label>
                    <select className="form-control form-group col-md-6 questions" id="q10">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                        <label for="q11">My dog loves to chase other dogs/be chased by other dogs.</label>
                        <select className="form-control form-group col-md-6 questions" id="q11">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q12">My dog loves to wrestle with other dogs.</label>
                    <select className="form-control form-group col-md-6 questions" id="q12">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q13">My dog loves meeting new doggy friends.</label>
                    <select className="form-control form-group col-md-6 questions" id="q13">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-info" id="submit">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-info" href="/match" role="button">Next</a>
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

        <div className="container bg-active text-info">
            <div className="row">
                <div className="col-12">
                    <div className="modal fade" id="survey-modal" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title" id="title">Survey completed!</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body mx-auto">
                                <h5 id="match-message">Thanks for telling us about your pup. Click next to tell us about ideal playmates.</h5>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-toggle="modal" data-dismiss="modal" id="close">Close</button>
                            <a className="btn btn-info" href="/match" role="button">Next</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container bg-active text-info">
            <div className="row">
                <div className="col-12">
                    <div className="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title" id="title">Oops!</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body mx-auto">
                                <h5 id="match-message">Please complete all required fields.</h5>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-dismiss="modal" id="close">Close</button>
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

export default Survey;