import React from 'react';
import RemoveModal from "./RemoveModal";

const buttonStyle = {
    float: "right",
    margin: 5
}

function EditRemoveBtn(props) {
    return (
        <>
       <button style={buttonStyle} className="btn btn-secondary" id="edit-profile">Edit Profile</button>
        <RemoveModal
            id={props._id}
        />
        </>
    )
}

export default EditRemoveBtn;