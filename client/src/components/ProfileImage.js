import React from 'react';

const imgStyle = {
    height: "auto",
    width: "100%",
}

function ProfileImage(props) {
    return (
        <div className="col-md-6 col-sm-12">
            <img className="rounded" src={props.url} alt="Pupper Pic" style={imgStyle}/>
        </div>
    )
}

export default ProfileImage;