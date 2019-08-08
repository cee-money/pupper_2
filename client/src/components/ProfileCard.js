import React, { Component } from "react";
import EditRemoveBtn from "../components/EditRemoveBtn";
import ProfileImage from "../components/ProfileImage";
import ProfileSummary from "../components/ProfileSummary";
import FindMatchesBtn from "../components/FindMatches";


class ProfileCard extends Component {
    state = {
        
    }

render () {
    return (
        <>
        <div className="row" id="match-card-row">
            <div className="col-md-12">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">
                        <h4>"[Dog's Name]'s Profile" 
                            <EditRemoveBtn /> 
                        </h4>  
                    </div>
                    <div className="card-body row">
                        <ProfileImage />
                        <ProfileSummary />
                    </div>
                </div>
            </div>
        </div>
        <FindMatchesBtn />
        
        </>
    )
}
}

export default ProfileCard;