import React, { Component } from "react";
import EditRemoveBtn from "../components/EditRemoveBtn";
import ProfileImage from "../components/ProfileImage";
import ProfileSummary from "../components/ProfileSummary";
import ProfileEdit from "../components/ProfileEdit";

const h4Style = {
  float: "left"
};

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      // key: this.props.key,
=======
>>>>>>> 7edc5f427ffefed57a001bd1084a1eaba8492186
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
      allDogFriendly: this.props.allDogFriendly,
      editActive: false
    };
  }

  handleEdit = event => {
    if(this.state.editActive){
    this.setState({
      editActive: false
    }) 
} else {
    this.setState({
        editActive: true
    })
}
    
  };
<<<<<<< HEAD
  // need to set editActive to false on click of savebtn, also need api call (update route)
=======
>>>>>>> 7edc5f427ffefed57a001bd1084a1eaba8492186

  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">
              <h4 style={h4Style}>{this.props.dogName}'s Profile</h4>
              <EditRemoveBtn
                _id={this.props._id}
                loadPuppers={this.props.loadPuppers}
                handleEdit={this.handleEdit}
              />
            </div>
            <div className="card-body row">
              <ProfileImage {...this.props} />
              {this.state.editActive ? (
                <ProfileEdit
                  {...this.props}
                  pupper={this.state}
                  handleEdit={this.handleEdit}
                  loadPuppers={this.props.loadPuppers}
                />
              ) : (
                <ProfileSummary {...this.props} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileCard;
