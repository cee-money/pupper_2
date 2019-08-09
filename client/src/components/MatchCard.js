import React from "react";
import BorkModal from "./BorkModal";
import { useAuth0 } from "../react-auth0-wrapper";

const cardStyleDiv = {
    maxWidth: "20rem"
}

const imgStyle = {
    height: "auto",
    width: "100%",
    display: "block"
}


function MatchCard(props) {

    // const {user} = useAuth0();

    // console.log("Match card", user)

    return (
        <div className="col-md-4 col-xs-12">
            <div className="card text-white bg-info mb-3" style={cardStyleDiv}>
                <div className="card-header">Owner: {props.ownerFirstName}</div>
                <div className="card-body">
                    <h4 className="card-title">{props.dogName}</h4>
                    <img src={props.url} alt="Pupper Pic" style={imgStyle}/>
                    <br/>
                    <BorkModal
                        ownerFirstName={props.ownerFirstName}
                        ownerEmail={props.ownerEmail}
                        // userName={user.given_name}
                        // userEmail={user.email}
                    />
                </div>
            </div>
        </div>
    )
}


export default MatchCard;