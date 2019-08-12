import React from 'react';
import RemoveModal from "./RemoveModal";

const buttonStyle = {
    float: "right",
    margin: 5
}

function EditRemoveBtn(props) {
    return (
        <>
       <button style={buttonStyle} className="btn btn-secondary" _id={props._id} id="edit-profile">Edit Profile</button>
        <RemoveModal
            _id={props._id}
            loadPuppers={props.loadPuppers}
        />
        </>
    )
}

export default EditRemoveBtn;