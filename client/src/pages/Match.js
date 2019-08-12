import React, { Component } from "react";
import {Link} from "react-router-dom"
import { Alert } from "reactstrap";
import MatchCard from "../components/MatchCard";
import API from "../utils/API";

const h1Style = {
  fontFamily: "'Lobster', cursive",
  fontSize: 185
};

const iStyle = {
  fontSize: 135,
  transform: "rotate(20deg)"
};

const jumboStyle = {
  paddingTop: 0
};

class Match extends Component {
    state = {
        matches: [],
    size: "medium",
    energetic: "yes",
    dominant: "yes",
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    console.log(this.props.user.email)
    console.log("hit")
    API.getMatches(
        this.state.size.toLowerCase(), this.state.energetic, this.state.dominant, this.props.user.email
    )
      .then(res => {
        console.log("Res data", res.data)
        this.setState({
          matches: res.data,
          size: "",
          energetic: "",
          dominant: ""
        })}
      )
      .catch(err => console.log(err));
  };

  resetMatches = () => {
    this.setState({ matches: [] });
  };

  render(props) {
    return (
      <>
        <div
          className="jumbotron jumbotron-fluid bg-secondary"
          style={jumboStyle}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-sm-12">
                <h1 className="display-1 text-white" id="logo" style={h1Style}>
                  pupper<i className="fas fa-paw" id="paw" style={iStyle} />
                </h1>
                <br />
                <h3 className="text-white">
                  Tell us what you're looking for in a pupper playmate.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {!this.state.matches.length ? (
          <div className="container bg-active text-info" id="filters">
            <div className="row">
              <div className="col-md-12">
                <br />
                <h3>
                  <i className="fas fa-paw" />
                  <strong>&nbsp;About Them</strong>
                </h3>
              </div>
            </div>
            <br />
            <form>
              <div className="row">
                <div className="col-12">
                  <h5>Select an answer to each question below.</h5>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12 form-group">
                  <label>I am looking to meet dogs that are:</label>
                  <select
                    className="form-control form-group col-md-6 match-questions"
                    id="match-q1"
                    name="size"
                    value={this.state.size}
                    onChange={this.handleInputChange}
                  >
                    <option value="small">Small (under 25 lbs)</option>
                    <option value="medium">Medium (between 25-50 lbs)</option>
                    <option value="large">Large (over 50 lbs)</option>
                  </select>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                  <label>I want to meet dogs with lots of energy!</label>
                  <select
                    className="form-control form-group col-md-6 match-questions"
                    id="match-q2"
                    name="energetic"
                    value={this.state.energetic}
                    onChange={this.handleInputChange}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-md-4 col-xs-12 form-group">
                  <label>My dog plays well with dominant dogs.</label>
                  <select
                    className="form-control form-group col-md-6 match-questions"
                    id="match-q3"
                    name="dominant"
                    value={this.state.dominant}
                    onChange={this.handleInputChange}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    type="submit"
                    data-toggle="modal"
                    className="btn btn-info"
                    onClick={this.handleFormSubmit}
                  >
                    Find Match
                  </button>
                </div>
              </div>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        ) : (
          <div className="container" id="show-matches">
            {this.state.matches.length ? (
              <>
                <div className="row">
                  {this.state.matches.map(match => (
                    <MatchCard
                      key={match._id}
                      _id={match._id}
                      url={match.url}
                      recipientFirstName={match.ownerFirstName}
                      dogName={match.dogName}
                      recipientEmail={match.ownerEmail}
                      user={this.props.user}
                    />
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      className="btn btn-info btn-lg text-white"
                      onClick={this.resetMatches}
                    >
                      Find More Matches
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="row">
                <h4>
                  <Alert color="light">
                    There are no matches. Select different parameters and
                    <Link to="/match" className="alert-link">
                      search again
                    </Link>
                    .
                  </Alert>
                </h4>
              </div>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </>
    );
  }
}


export default Match;
