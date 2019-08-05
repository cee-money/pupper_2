import React from 'react';

const buttonStyle = {
    float: "right"
}

function EditRemoveBtn() {
    return (
        <div style={buttonStyle}>
            <button className="btn btn-secondary contact-btn"  id="edit-profile">Edit</button>&nbsp;&nbsp;
            <button className="btn btn-secondary contact-btn" id="remove-profile">Remove</button>
        </div>
    )
}

export default EditRemoveBtn;