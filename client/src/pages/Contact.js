import React, {Component} from "react";
// import MessageList from "../components/MessageList";
// import MessageForm from "../components/MessageForm";
import ChatApp from "../components/ChatApp";
// import NameBox from "../components/NameBox";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
};

const iStyle = {
    fontSize: 135,
    transform: "rotate(20deg)"
}


class Contact extends Component {
    // state = {};
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         messages: []
    //     };
    // };
    //
    // handleNewMessage = (text) => {
    //     this.setState({
    //         messages: [...this.state.messages, {me: true, author: "Me", body: text}]
    //     });
    // };

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-sm-12">
                                <h1 className="display-1 text-white" id="logo" style={h1Style}>
                                    <span>pupper </span>
                                    <i className="fas fa-paw" id="paw" style={iStyle}/>
                                </h1>
                                <br/>
                                <h3 className="text-white">Bork at a match!</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" id="messages">
                    {/*<NameBox/>*/}
                    <ChatApp />

<<<<<<< HEAD
=======
render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-12">
                    <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                    <br/>
                    <h3 className="text-white">Bork at a match!</h3>
>>>>>>> 030471bdc9ff27162625ac7a1b55ae6ba4b9c5e6
                </div>
            </div>
        )
    }
}

export default Contact;