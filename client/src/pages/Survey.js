import React, { Component } from "react";
// import axios from 'axios';
import YesNoMenu from "../components/YesNoMenu";
import SizeMenu from "../components/SizeMenu";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { APIGateway } from "aws-sdk";
import API from "../utils/API";
import { useAuth0 } from "../react-auth0-wrapper";
import AWS from "./AWS";


const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"",
            dogName: "",
            size: "",
            familyFriendly: "",
            energetic: "",
            lazy: "",
            strangerDanger: "",
            dogDanger: "",
            largeDogDanger: "",
            smallDogDanger: "",
            dominant: "",
            doesntShare: "",
            chaser: "",
            wrestler: "",
            allDogFriendly: "",
            ownerFirstName: "",
            ownerLastName: "",
            ownerEmail: "",
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    };

    toggle() {

        this.setState(prevState => ({
            modal: !prevState.modal
          }));
    }
 
addToState() {
    const {user, loading } = useAuth0();

    if(loading){
        console.log("Loading");
    } else {
        this.setState({
            ownerFirstName: user.given_name,
            ownerLastName: user.family_name,
            ownerEmail: user.email
        })
    }
};

handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
};


handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.dogName && this.state.url) {

        console.log("Yup!")
        console.log(this.state)

        API.create(this.state)
            .then(res => {
                this.setState({
                url:"",
                dogName: "",
                size: "",
                familyFriendly: "",
                energetic: "",
                lazy: "",
                strangerDanger: "",
                dogDanger: "",
                largeDogDanger: "",
                smallDogDanger: "",
                dominant: "",
                doesntShare: "",
                chaser: "",
                wrestler: "",
                allDogFriendly: "",
                ownerFirstName: "",
                ownerLastName: "",
                ownerEmail: ""
            })
            
            })
            .catch(err => this.toggle())
    } 
};

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
                <AWS/>
                <div className="col-12">
                    <small>* indicates required field</small>
                </div>
            </div>
            {/* <div className="row"></div> */}
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
                    <select className="form-control form-group col-md-6 questions" id="q1">
                        <SizeMenu
                            name="size"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label>Is your dog family friendly?</label>
                    <select className="form-control form-group col-md-6 questions" id="q2">
                        <YesNoMenu 
                            name="familyFriendly"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog has lots of energy. They can keep playing all day long!</label>
                    <select className="form-control form-group col-md-6 questions" id="q3">
                        <YesNoMenu 
                            name="energetic"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dogs favorite position is asleep on the couch.</label>
                    <select className="form-control form-group col-md-6 questions" id="q4">
                        <YesNoMenu 
                            name="lazy"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog is skittish around new people.</label>
                    <select className="form-control form-group col-md-6 questions" id="q5">
                        <YesNoMenu 
                            name="strangerDanger"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog is skittish around large groups of dogs.</label>
                    <select className="form-control form-group col-md-6 questions" id="q6">
                        <YesNoMenu 
                            name="dogDanger"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog does well around dogs that are larger than them.</label>
                    <select className="form-control form-group col-md-6 questions" id="q7">
                        <YesNoMenu 
                            name="largeDogDanger"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog does well around dogs that are smaller than them.</label>
                    <select className="form-control form-group col-md-6 questions" id="q8">
                        <YesNoMenu 
                            name="smallDogDanger"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog has alpha tendency.</label>
                    <select className="form-control form-group col-md-6 questions" id="q9">
                        <YesNoMenu 
                            name="dominant"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog does not like to share their toys.</label>
                    <select className="form-control form-group col-md-6 questions" id="q10">
                        <YesNoMenu 
                            name="doesntShare"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                        <label>My dog loves to chase other dogs/be chased by other dogs.</label>
                        <select className="form-control form-group col-md-6 questions" id="q11">
                            <YesNoMenu 
                                name="chaser"
                                onChange={this.handleInputChange}
                            />
                        </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog loves to wrestle with other dogs.</label>
                    <select className="form-control form-group col-md-6 questions" id="q12">
                        <YesNoMenu 
                            name="wrestler"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 form-group">
                    <label>My dog loves meeting new doggy friends.</label>
                    <select className="form-control form-group col-md-6 questions" id="q13">
                        <YesNoMenu 
                            name="allDogFriendly"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-info" onClick={this.handleFormSubmit}>Submit</button>
                </div>
                <div className="col-md-1">
                    <a className="btn btn-info" href="/match" role="button">Next</a>
                </div>
            </div>
            </form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
        </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader className="text-info" toggle={this.toggle}><i className="fas fa-paw"></i>&nbsp;&nbsp;Profile Saved
                </ModalHeader>
                <ModalBody className="text-info">
                    Thanks for telling us about your pup! Click close to add another profile for your other pup/pups. Or click next to tell us about ideal playmates.    
                </ModalBody>
                <ModalFooter>
                    <Button color="info" href="/match">Next</Button>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
    </>
    )
};
}

export default Survey;