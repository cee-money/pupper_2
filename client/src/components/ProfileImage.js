import React from 'react';

const imgStyle = {
    height: "auto",
    width: "100%",
}

function ProfileImage() {
    return (
        <div className="col-md-6 col-sm-12">
            <img className="rounded" src="https://www.doggroomingcourse.com/wp-content/uploads/2018/02/groomed-dog-header.jpg" alt="Pupper Pic" style={imgStyle}/>
        </div>
    )
}

export default ProfileImage;