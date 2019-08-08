import React, { Component } from "react";
import MatchCard from "../components/MatchCard";
import YesNoMenu from "../components/YesNoMenu";
import SizeMenu from "../components/SizeMenu";
import { useAuth0 } from "../react-auth0-wrapper";
import API from "../utils/API";

const h1Style = {
    fontFamily: "'Lobster', cursive",
    fontSize: 185
}

const iStyle = {
    fontSize: 135
}


class Match extends Component {
    state = {
        matches: [
        // {
        //     dogName: "Fido",
        //     url:"https://www.azhumane.org/wp-content/uploads/2015/10/iStock-623499258-200x200.jpg",
        //     ownerFirstName: "Dawn",
        //     ownerEmail: "dawn@me.com",
        //     size: "Small",
        //     energetic: "Yes",
        //     dominant: "No"
        // },
        // {
        //     dogName: "Frank",
        //     url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYquZS-VxQyz92r3dmKeBzx-V_o7xm3jobIXOftVk7T03YffF",
        //     ownerFirstName: "Sherry",
        //     ownerEmail: "sherry@aol.com",
        //     size: "Medium",
        //     energetic: "Yes",
        //     dominant: "No"
        // },
        // {
        //     dogName: "Hooch",
        //     url:"https://www.dogthelove.com/images/dog_200x200.jpg",
        //     ownerFirstName: "Carol",
        //     ownerEmail: "carol@gmail.com",
        //     size: "Large",
        //     energetic: "Yes",
        //     dominant: "Yes"
        // },
        // {
        //     dogName: "Cecil",
        //     url:"https://thedogstop.com/pa-pittsburgh-sewickley/wp-content/uploads/sites/7/2017/08/george.jpg",
        //     ownerFirstName: "Avery",
        //     ownerEmail: "cecil@optonline.net",
        //     size: "Medium",
        //     energetic: "No",
        //     dominant: "No"
        // }
    ],
        size: "",
        energetic: "",
        dominant: "",
        ownerFirstName: "",
        ownerLastName: "",
        ownerEmail: "",
    }

addToState() {
    const {user, loading } = useAuth0();

    if(loading){
        console.log("Loading");
    } else {
        this.setState({
            ownerFirstName: user.given_name,
            ownerLastName: user.family_name,
            ownerEmail: user.email
        })
    }
};


handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();

    API.getMatches(this.state)
        .then(res => 
            this.setState({ matches: res.data, size: "", energetic: "", dominant: ""}))
        .catch(err => console.log(err))
};

resetMatches() {
    this.setState({ matches: []})
};

render() {
    return (
        <>
        <div className="jumbotron jumbotron-fluid bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <h1 className="display-1 text-white" id="logo" style={h1Style}>pupper&nbsp;<i className="fas fa-paw" id="paw" style={iStyle}></i></h1>
                        <br/>
                        <h3 className="text-white">Tell us what you're looking for in a pupper playmate.</h3>
                    </div>
                </div>
            </div>
        </div>

    {!this.state.matches.length ? (  
       <div className="container bg-active text-info" id="filters">
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h3><i className="fas fa-paw"></i><strong>&nbsp;About Them</strong></h3>
                </div>
            </div>
            <br/>
            <form>

            <div className="row">
                <div className="col-12">
                    <h5>Select an answer to each question below.</h5>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="match-q1">I am looking to meet dogs that are:</label>
                    <select className="form-control form-group col-md-6 match-questions" id="match-q1">
                        <SizeMenu 
                            name="size"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="match-q2">I want to meet dogs with lots of energy!</label>
                    <select className="form-control form-group col-md-6 match-questions" id="match-q2">
                        <YesNoMenu 
                            name="energetic"
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                    <label for="match-q3">My dog plays well with dominant dogs.</label>
                    <select className="form-control form-group col-md-6 match-questions" id="match-q3">
                        <YesNoMenu
                            name="dominant" 
                            onChange={this.handleInputChange}
                        />
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="submit" data-toggle="modal" className="btn btn-info" onClick={this.handleFormSubmit}>Find Match</button>
                </div>
            </div>
            </form> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       </div> 
       
    ) : (

        <div className="container" id="show-matches">
            {this.state.matches.length ? (
                <>
                <div className="row">                
                    {this.state.matches.map(match => (
                        <MatchCard
                            key={match._id}
                            url={match.url}
                            ownerFirstName={match.ownerFirstName}
                            dogName={match.dogName}
                            ownerEmail={match.ownerEmail}
                        />   
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-info btn-lg text-white" onClick={this.resetMatches}>Find More Matches</button>
                    </div>
                </div>
                </>
            ) : (

                <h3>There are no matches to display.</h3>

            )}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

    )}
        </>   
    )
};
}

export default Match;