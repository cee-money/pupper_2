import React from 'react';
import RemoveModal from "./RemoveModal";

const buttonStyle = {
    float: "right",
    margin: 5
}

function EditRemoveBtn(props) {
    return (
        <>
<<<<<<< HEAD
       <button style={buttonStyle} className="btn btn-secondary" _id={props._id} onClick={(e) => {props.handleEdit(e)}} id="edit-profile">Edit Profile</button>
=======
        <button 
            style={buttonStyle} 
            className="btn btn-secondary" 
            _id={props._id} 
            onClick={(e) => {props.handleEdit(e)}}
        >
        Edit Profile</button>
>>>>>>> 7edc5f427ffefed57a001bd1084a1eaba8492186
        <RemoveModal
            _id={props._id}
            loadPuppers={props.loadPuppers}
        />
        </>
    )
}

export default EditRemoveBtn;