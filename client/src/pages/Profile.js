import React, { Component } from "react";
import { Alert } from 'reactstrap';
import ProfileCard from "../components/ProfileCard";
import API from "../utils/API";
import {Link} from "react-router-dom";


const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135,
    transform: "rotate(20deg)"
}

const jumboStyle ={
    paddingTop: 0
}

class Profile extends Component {

    state = {
        puppers: [],
        ownerEmail: this.props.user.email
    }

componentDidMount() {
    this.loadPuppers();
};

loadPuppers = () => {
    API.getProfile(this.state.ownerEmail)
        .then(res => 
            this.setState({ puppers: res.data })
            )
        .catch(err => console.log(err))
};

render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary" style={jumboStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                        <br/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container bg-active text-info" id="filters">
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h3><i className="fas fa-paw"></i><strong>&nbsp;Pupper Profile</strong></h3>
                </div>
            </div>
        </div>            
        <br/>
        
        
        <div className="container" id="show-profile">
        {this.state.puppers.length ? (  
            <div className="row">                
                {this.state.puppers.map(pupper => (
                    <ProfileCard
                        pupper={pupper}
                        key={pupper._id}
                        _id={pupper._id}
                        url={pupper.url}
                        dogName={pupper.dogName}
                        size={pupper.size}
                        familyFriendly={pupper.familyFriendly}
                        energetic={pupper.energetic}
                        strangerDanger={pupper.strangerDanger}
                        dogDanger={pupper.dogDanger}
                        largeDogDanger={pupper.largeDogDanger}
                        smallDogDanger={pupper.smallDogDanger}
                        dominant={pupper.dominant}
                        doesntShare={pupper.doesntShare}
                        chaser={pupper.chaser}
                        wrestler={pupper.wrestler}
                        allDogFriendly={pupper.allDogFriendly}
                        ownerEmail={pupper.ownerEmail}
                        loadPuppers={this.loadPuppers}
                    />   
                ))}
            </div> 
        ) : (
            <div className="row">
                <h5>
                <br/>
                <Alert color="light">
                    You have not yet created a pupper profile. Go to <Link to="/survey" className="alert-link text-info">Add Profile</Link> to begin.
                </Alert>
                </h5>
            </div>  
        )}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        </>   
    )
};
}

export default Profile;