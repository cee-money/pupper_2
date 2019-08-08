import React, { Component } from "react";
import axios from 'axios';
import LogoutBtn from "../components/LogoutBtn";
import YesNoMenu from "../components/YesNoMenu";
import SizeMenu from "../components/SizeMenu";
import SuccessModal from "../components/SuccessModal";
// import { APIGateway } from "aws-sdk";
import API from "../utils/API";
import { useAuth0 } from "../react-auth0-wrapper";


const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}

const uploadBtn = {
    marginTop: 32,
    marginLeft: -10
}


class Survey extends Component {

    state = {
        success: false,
        url:"",
        error: false,
        errorMessage: "",
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
      success: false,
      url: ""
    });
};

handleUpload = (ev) => {
    ev.preventDefault()
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios.post("http://localhost:3000/sign_s3",{
      fileName : fileName,
      fileType : fileType
    })
    .then(response => {
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);
      var options = {
        headers: {
          'Content-Type': fileType
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        this.setState({success: true});
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
};

handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.dogName && this.state.url) {

        API.create(this.state)
            .then(this.setState({
                success: false,
                url:"",
                error: false,
                errorMessage: "",
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
            }))
            .catch(err => console.log(err))
    } 
};

render() {
    const SuccessMessage = () => (
        <div style={{padding:50}}>
            <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
            {/* <a href={this.state.url}>Access the file here</a> */}
            <br/>
        </div>
    )
    const ErrorMessage = () => (
    <div style={{padding:50}}>
        <h3 style={{color: 'red'}}>FAILED UPLOAD</h3>
        <span style={{color: 'red', backgroundColor: 'black'}}>ERROR: </span>
        <span>{this.state.errorMessage}</span>
        <br/>
    </div>
    )      
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
                <div className="col-md-4 col-xs-12 form-group App">
                    <label for='upload'>Your Pupper's Photo*:</label>
                    <center>
                        {this.state.success ? <SuccessMessage /> : null}
                        {this.state.error ? <ErrorMessage /> : null}
                    <input 
                        className="form-control" 
                        id="dog-photo" 
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange} 
                        ref={(ref) => { this.uploadInput = ref; }} 
                        type="file"
                        required
                    />
                    </center>
                </div>
                <div className="col-md-2 col-xs-12 form-group">
                    <button 
                        className="btn btn-info btn-sm"
                        onClick={this.handleUpload}
                        style={uploadBtn}>Upload
                    </button>
                </div>
                <div className="col-12">
                    <small>* indicates required field</small>
                </div>
            </div>
            <div className="row">
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
                    <label for="q1">What size would you consider your dog?</label>
                    <select className="form-control form-group col-md-6 questions" id="q1">
                        <SizeMenu
                            name="size"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q2">Is your dog family friendly?</label>
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
                    <label for="q3">My dog has lots of energy. They can keep playing all day long!</label>
                    <select className="form-control form-group col-md-6 questions" id="q3">
                        <YesNoMenu 
                            name="energetic"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q4">My dogs favorite position is asleep on the couch.</label>
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
                    <label for="q5">My dog is skittish around new people.</label>
                    <select className="form-control form-group col-md-6 questions" id="q5">
                        <YesNoMenu 
                            name="strangerDanger"
                            onChange={this.handleInputChange} 
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q6">My dog is skittish around large groups of dogs.</label>
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
                    <label for="q7">My dog does well around dogs that are larger than them.</label>
                    <select className="form-control form-group col-md-6 questions" id="q7">
                        <YesNoMenu 
                            name="largeDogDanger"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q8">My dog does well around dogs that are smaller than them.</label>
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
                    <label for="q9">My dog has alpha tendency.</label>
                    <select className="form-control form-group col-md-6 questions" id="q9">
                        <YesNoMenu 
                            name="dominant"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q10">My dog does not like to share their toys.</label>
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
                        <label for="q11">My dog loves to chase other dogs/be chased by other dogs.</label>
                        <select className="form-control form-group col-md-6 questions" id="q11">
                            <YesNoMenu 
                                name="chaser"
                                onChange={this.handleInputChange}
                            />
                        </select>
                </div>
                <div className="col-md-6 col-xs-12 form-group">
                    <label for="q12">My dog loves to wrestle with other dogs.</label>
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
                    <label for="q13">My dog loves meeting new doggy friends.</label>
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
                    <SuccessModal 
                        dogName={this.state.dogName}
                        url={this.state.url}
                    />
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
    </>
    )
};
}
            
export default Survey;