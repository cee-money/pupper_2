import React, { Component } from "react";
import YesNoMenu from "./YesNoMenu";
import SizeMenu from "./SizeMenu";
// import API from "../utils/API";


class ProfileEdit extends Component {  
    constructor(props) {
        super(props);
        this.state = {
        myPupper: this.props.pupper,
    }
    }
componentDidMount() {
    console.log(this.state.myPupper)
};



handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name]: value,
    });
};

handleFormSubmit = event => {
    event.preventDefault()


}
    
render() {
    return (
        <>
        <div className="col-md-6 col-sm-12 text-info bg-light rounded border border-secondary">
        <form>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                <br/>
                    Size:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="size"
                  value={this.state.myPupper.size}
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
                    <br/>
                    Family friendly:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="familyFriendly"
                  value={this.state.myPupperfamilyFriendly}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> 
                    <br/>
                    Energetic:&nbsp;&nbsp;<select
                  className="form-control form-group col-md-6 questions"
                  name="energetic"
                  value={this.state.myPupper.energetic}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                    <br/>
                    Skittish (dogs):&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="dogDanger"
                  value={this.state.myPupper.dogDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                    <br/>
                    Skittish (people):&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="strangerDanger"
                  value={this.state.myPupper.strangerDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                    <br/>
                    Large playmates:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="largeDogDanger"
                  value={this.state.myPupper.largeDogDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
                <div className="col-md-6 col-sm-12">
                <br/>
                    Small playmates:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="smallDogDanger"
                  value={this.state.myPupper.smallDogDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> 
                    <br/>
                    Dominant:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="dominant"
                  value={this.state.myPupper.dominant}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> 
                    <br/>
                    Guards resouces:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="doesntShare"
                  value={this.state.myPupper.doesntShare}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                    <br/>
                    Loves chase:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  name="chaser"
                  value={this.state.myPupper.chaser}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                    <br/>
                    Loves wrestling:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  id="q12"
                  name="wrestler"
                  value={this.state.myPupper.wrestler}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> 
                    <br/>
                    Outgoing:&nbsp;&nbsp;
                    <select
                  className="form-control form-group col-md-6 questions"
                  id="q13"
                  name="allDogFriendly"
                  value={this.state.myPupper.allDogFriendly}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-10">
                    <button type="submit" className="btn btn-info">Save</button>
                </div>
                <br/>
                <br/>
            </div>
        </form>
        </div>
        </>
    )
}
}


                        

export default ProfileEdit;