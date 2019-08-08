import React from "react";
import EditRemoveBtn from "../components/EditRemoveBtn";
import ProfileImage from "../components/ProfileImage";
import ProfileSummary from "../components/ProfileSummary";

const h4Style = {
    float: "left"

}

function ProfileCard(props) {

    return (
        <>
        <div className="col-md-12">
            <div className="card text-white bg-info mb-3">
                <div className="card-header">
                    <h4 style={h4Style}>{props.dogName}'s Profile
                        
                    </h4>  
                    <EditRemoveBtn 
                            id={props._id}
                        /> 
                </div>
                <div className="card-body row">
                    <ProfileImage {...props} />
                    <ProfileSummary {...props} />
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileCard;