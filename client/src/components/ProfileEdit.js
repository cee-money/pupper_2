import React, { Component } from "react";
import YesNoMenu from "./YesNoMenu";
import SizeMenu from "./SizeMenu";
import API from "../utils/API";

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      url: this.props.url,
      dogName: this.props.dogName,
      size: this.props.size,
      familyFriendly: this.props.familyFriendly,
      energetic: this.props.energetic,
      strangerDanger: this.props.strangerDanger,
      dogDanger: this.props.dogDanger,
      largeDogDanger: this.props.largeDogDanger,
      smallDogDanger: this.props.smallDogDanger,
      dominant: this.props.dominant,
      doesntShare: this.props.doesntShare,
      chaser: this.props.chaser,
      wrestler: this.props.wrestler,
      allDogFriendly: this.props.allDogFriendly
    };
  }
  componentDidMount() {
    console.log(this.state.myPupper);
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.updateProfile(this.state._id, this.state)
      .then(() => {
        this.props.handleEdit(event);
      })
      .then(() => {
        this.props.loadPuppers();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="col-md-6 col-sm-12 text-info bg-light rounded border border-secondary">
          <form>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <br />
                <label>Name:&nbsp;&nbsp;</label>
                <input
                  placeholder={this.props.dogName}
                  type="text"
                  className="form-control form-control-sm col-8"
                  name="dogName"
                  value={this.state.dogName}
                  onChange={this.handleInputChange}
                />
                <br />
                Size:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="size"
                  value={this.state.size}
                  onChange={this.handleInputChange}
                >
                  <option value="small">Small (under 25 lbs)</option>
                  <option value="medium">Medium (between 25-50 lbs)</option>
                  <option value="large">Large (over 50 lbs)</option>
                </select>
                
                Family friendly:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="familyFriendly"
                  value={this.state.familyFriendly}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Energetic:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="energetic"
                  value={this.state.energetic}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Skittish (dogs):&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="dogDanger"
                  value={this.state.dogDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Skittish (people):&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="strangerDanger"
                  value={this.state.strangerDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Large playmates:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="largeDogDanger"
                  value={this.state.largeDogDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-12">
                <br />
                
                
                Small playmates:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="smallDogDanger"
                  value={this.state.smallDogDanger}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Dominant:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="dominant"
                  value={this.state.dominant}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Guards resouces:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="doesntShare"
                  value={this.state.doesntShare}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Loves chase:&nbsp;&nbsp;
                <select
                  className="form-control form-group col-md-6 questions"
                  name="chaser"
                  value={this.state.chaser}
                  onChange={this.handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                Loves wrestling:&nbsp;&nbsp;
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
                
                Outgoing:&nbsp;&nbsp;
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
              <div className="col-md-2 offset-md-10">
                <button
                  type="submit"
                  id={this.state._id}
                  onClick={this.handleFormSubmit}
                  className="btn btn-info"
                >
                  Save
                </button>
              </div>
              <br />
              <br />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ProfileEdit;
