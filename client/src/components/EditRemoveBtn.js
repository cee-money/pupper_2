import React from 'react';
import RemoveModal from "./RemoveModal";

const buttonStyle = {
    float: "right",
    margin: 5
}

function EditRemoveBtn() {
    return (
        <>
       <button style={buttonStyle} type="button" className="btn btn-secondary" role="button" id="edit-profile">Edit Profile</button>
            {/* <button className="btn btn-secondary" id="remove-profile">Remove Profile</button> */}
        <RemoveModal/>
        </>
    )
}

export default EditRemoveBtn;