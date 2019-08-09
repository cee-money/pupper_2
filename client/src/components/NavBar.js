import React from "react";
import { Link } from "react-router-dom";

const iStyle = {
  fontSize: 25,
  margin: 5
};

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-info bg-info text-white">
        <i className="fas fa-paw" id="paw" href="/" style={iStyle} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            {!props.isAuthenticated && (
              <li className="nav-item">
                <button className="" onClick={() => props.loginWithRedirect({})}>
                  Log in
                </button>
              </li>
            )}
            {props.isAuthenticated && (
                <>
                <li className="nav-item">
              <Link className="nav-link text-white" to="/match">
                Matches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/survey">
                Add Profile
              </Link>
            </li>
            </>
          )}
        {props.isAuthenticated && (
            <li className="nav-item">
              <button className="nav-link" onClick={() => props.logout()}>Log out</button>
            </li>
          )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
