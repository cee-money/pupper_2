import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import API from "../utils/API";
import AWS from "./AWS";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
};

const iStyle = {
    fontSize: 135,
    transform: "rotate(20deg)"
};

const jumboStyle = {
    paddingTop: 0
};


class Survey extends Component {

    constructor(props) {
      super(props);
      this.state = {
        url: "",
        dogName: "",
        size: "medium",
        familyFriendly: "yes",
        energetic: "yes",
        lazy: "yes",
        strangerDanger: "yes",
        dogDanger: "yes",
        largeDogDanger: "yes",
        smallDogDanger: "yes",
        dominant: "yes",
        doesntShare: "yes",
        chaser: "yes",
        wrestler: "yes",
        allDogFriendly: "yes",
        ownerFirstName: "",
        ownerLastName: "",
        ownerEmail: "",
        modal: false
      };
      this.setPupperURL = this.setPupperURL.bind(this);
    }

    setPupperURL = (value) => {
      this.setState({
        url: value
      })
    };

    toggle() {

        if (this.state.modal === false) {
            // console.log("modal to true")
            this.setState({modal: true})
        } else if (this.state.modal === true) {
            // console.log("modal to false")
            this.setState({modal: false})
        }
    };

    handleInputChange = event => {

        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.dogName && this.state.url) {

            API.create({
                url: this.state.url,
                dogName: this.state.dogName,
                size: this.state.size,
                familyFriendly: this.state.familyFriendly,
                energetic: this.state.energetic,
                lazy: this.state.lazy,
                strangerDanger: this.state.strangerDanger,
                dogDanger: this.state.dogDanger,
                largeDogDanger: this.state.largeDogDanger,
                smallDogDanger: this.state.smallDogDanger,
                dominant: this.state.dominant,
                doesntShare: this.state.doesntShare,
                chaser: this.state.doesntShare,
                wrestler: this.state.wrestler,
                allDogFriendly: this.state.allDogFriendly,
                ownerFirstName: this.props.user.given_name,
                ownerLastName: this.props.user.family_name,
                ownerEmail: this.props.user.email
            })
                .then(res => {
                    this.setState({
                        url: "",
                        dogName: "",
                        size: "medium",
                        familyFriendly: "yes",
                        energetic: "yes",
                        lazy: "yes",
                        strangerDanger: "yes",
                        dogDanger: "yes",
                        largeDogDanger: "yes",
                        smallDogDanger: "yes",
                        dominant: "yes",
                        doesntShare: "yes",
                        chaser: "yes",
                        wrestler: "yes",
                        allDogFriendly: "yes",
                        ownerFirstName: "",
                        ownerLastName: "",
                        ownerEmail: ""
                    });
                    this.toggle()
                })
                .catch(err => console.log(err));
        } 
    };

    render() {

        return (
            <>
                <div
                    className="jumbotron jumbotron-fluid bg-secondary"
                    id="mainsurveyjumbo"
                    style={jumboStyle}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-sm-12" id="tellustext">
                                <h1 className="display-1 text-white" id="logo" style={h1Style}>
                                    pupper
                                    <i className="fas fa-paw" id="paw" style={iStyle}/>
                                </h1>
                                <br/>
                                <h3 className="text-white">Tell us about you and your pup.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container bg-active text-info">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <h3>
                                <i className="fas fa-paw"/>
                                <strong>&nbsp;About You</strong>
                            </h3>
                        </div>
                    </div>
                    <br/>
                    <form id="main-form">
                        <div className="row">
                            <div className="col-md-4 col-xs-12 form-group">
                                <label>Your Pupper's Name*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dog-name"
                                    name="dogName"
                                    value={this.state.dogName}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            <AWS setPupperURL={this.setPupperURL}/>
                            <div className="col-12">
                                <small>* indicates required field</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <hr/>
                                <h5>Select an answer to each question below.</h5>
                                <br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>What size would you consider your dog?</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q1"
                                    name="size"
                                    value={this.state.size}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="small">
                                        Small (under 25 lbs)
                                    </option>
                                    <option value="medium">
                                        Medium (between 25-50 lbs)
                                    </option>
                                    <option value="large">
                                        Large (over 50 lbs)
                                    </option>
                                </select>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>Is your dog family friendly?</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q2"
                                    name="familyFriendly"
                                    value={this.state.familyFriendly}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>
                                    My dog has lots of energy. They can keep playing all day long!
                                </label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q3"
                                    name="energetic"
                                    value={this.state.energetic}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dogs favorite position is asleep on the couch.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q4"
                                    name="lazy"
                                    value={this.state.lazy}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dog is skittish around new people.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q5"
                                    name="strangerDanger"
                                    value={this.state.strangerDanger}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dog is skittish around large groups of dogs.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q6"
                                    name="dogDanger"
                                    value={this.state.dogDanger}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>
                                    My dog does well around dogs that are larger than them.
                                </label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q7"
                                    name="largeDogDanger"
                                    value={this.state.largeDogDanger}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>
                                    My dog does well around dogs that are smaller than them.
                                </label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q8"
                                    name="smallDogDanger"
                                    value={this.state.smallDogDanger}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dog has alpha tendency.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q9"
                                    name="dominant"
                                    value={this.state.dominant}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dog does like to share their toys.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q10"
                                    name="doesntShare"
                                    value={this.state.doesntShare}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>
                                    My dog loves to chase other dogs/be chased by other dogs.
                                </label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q11"
                                    name="chaser"
                                    value={this.state.chaser}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dog loves to wrestle with other dogs.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q12"
                                    name="wrestler"
                                    value={this.state.wrestler}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-group">
                                <label>My dog loves meeting new doggy friends.</label>
                                <select
                                    className="form-control form-group col-md-6 questions"
                                    id="q13"
                                    name="allDogFriendly"
                                    value={this.state.allDogFriendly}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <button
                                    className="btn btn-info"
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit
                                </button>
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
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader className="text-info" toggle={(e) => {
                        this.toggle(e)
                    }}>
                        <i className="fas fa-paw"/>
                        &nbsp;&nbsp;Profile Saved
                    </ModalHeader>
                    <ModalBody className="text-info">
                        Thanks for telling us about your pup! Click close to add another
                        profile for your other pup/pups. Or click next to tell us about
                        ideal playmates.
                    </ModalBody>
                    <ModalFooter>
                        <Link className="btn btn-info" role="button" to="/match">
                            Next
                        </Link>
                        <Button color="secondary" onClick={(e) => {
                            this.toggle(e)
                        }}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Survey;
