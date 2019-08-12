import React from "react";
import EditRemoveBtn from "../components/EditRemoveBtn";
import ProfileImage from "../components/ProfileImage";
import ProfileSummary from "../components/ProfileSummary";
import ProfileEdit from "../components/ProfileEdit";


const h4Style = {
    float: "left"

}

function ProfileCard(props) {

    console.log(props)
    return (
        <>
        <div className="col-md-12">
            <div className="card text-white bg-info mb-3">
                <div className="card-header">
                    <h4 style={h4Style}>{props.dogName}'s Profile
                        
                    </h4>  
                    <EditRemoveBtn 
                            _id={props._id}
                            loadPuppers={props.loadPuppers}
                        /> 
                </div>
                <div className="card-body row">
                    <ProfileImage {...props} />
                    <ProfileSummary {...props} />
                    {/* <ProfileEdit {...props} /> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileCard;