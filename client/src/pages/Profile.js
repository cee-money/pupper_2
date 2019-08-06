import React, { Component } from "react";
import ProfileCard from "../components/ProfileCard";
import LogoutBtn from "../components/LogoutBtn";
import API from "../utils/API";


const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class Profile extends Component {
    state = {
        
    }


    componentDidMount() {
        API.getProfile
    }

render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper&nbsp;<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                    </div>
                    <LogoutBtn />
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
            <ProfileCard/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

        </>   
    )
}
}

export default Profile;