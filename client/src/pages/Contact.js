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
        
        <div className="container" id="messages">
            <NameBox />
            <ChatApp />
        </div> 
     
    )
}
}

export default Contact;