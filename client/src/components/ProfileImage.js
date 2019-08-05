import React from 'react';

const imgStyle = {
    height: "auto",
    width: "100%",
}

function ProfileImage() {
    return (
        <div className="col-md-6 col-sm-12">
            <img src="http://cdn.akc.org/content/article-body-image/rottweiler_dog_pictures.jpg" alt="Pupper Pic" style={imgStyle}/>
            <br/>
        </div>
    )
}

export default ProfileImage;