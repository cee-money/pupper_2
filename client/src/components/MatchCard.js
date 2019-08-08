import React from "react";

const cardStyleDiv = {
    maxWidth: "20rem"
}

const imgStyle = {
    height: "auto",
    width: "100%",
    display: "block"
}


function MatchCard(props) {

    return (
        <div className="col-md-4 col-xs-12">
            <div className="card text-white bg-info mb-3" style={cardStyleDiv}>
                <div className="card-header">Owner: {props.ownerFirstName}</div>
                <div className="card-body">
                    <h4 className="card-title">{props.dogName}</h4>
                    <img src={props.url} alt="Pupper Pic" style={imgStyle}/>
                    <br/>
                    <button className="btn btn-secondary btn-sm contact-btn" data-email={props.ownerEmail}>Contact</button>
                </div>
            </div>
        </div>
    )
}


export default MatchCard;