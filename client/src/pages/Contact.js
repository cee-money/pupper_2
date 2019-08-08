import React, { Component } from "react";
import NameBox from "../components/NameBox";
import ChatApp from "../components/ChatApp";


const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class Contact extends Component {
    state = {
        
    }


render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-12">
                    <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper&nbsp;<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                    <br/>
                    <h3 className="text-white">Bork at a match!</h3>
                </div>
                <LogoutBtn />
            </div>
        </div>
        </div>
        
        <div className="container" id="messages">
            <NameBox />
            <ChatApp />
        </div> 
     </>
    )
}
}

export default Contact;