import React, { Component } from "react";

const cardStyleDiv = {
    maxWidth: "20rem"
}

const imgStyle = {
    height: 200,
    width: "100%",
    display: "block"
}


class MatchCard extends Component {
    state = {
        
    }

render () {
    return (
        <>
        <div className="row" id="match-card-row">
            <div className="col-md-4 col-xs-12">
                <div className="card text-white bg-info mb-3" style={cardStyleDiv}>
                    <div className="card-header">Owner: Name</div>
                    <div className="card-body">
                        <h4 className="card-title">Dog Name Here</h4>
                        <img src="https://awscape.org.za/wp-content/uploads/2018/05/dog-200x200.jpg" alt="Pupper Pic" style={imgStyle}/>
                        <br/>
                        <button className="btn btn-secondary btn-sm contact-btn" data-email="user's email">Contact</button>
                    </div>
                </div>
            </div>
            </div>

        <div className="row">
            <div className="col-12">
                <button className="btn btn-info btn-lg text-white" id="find-more">Find More Matches</button>
            </div>
        </div>
        </>
    )
}
}

export default MatchCard;