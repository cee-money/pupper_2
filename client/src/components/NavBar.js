import React from 'react';
import LogoutBtn from "./LogoutBtn";

const iStyle = {
    fontSize: 25,
    margin: 5
}


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-info bg-info text-white">
                <a className="text-white" href="/"><i className="fas fa-paw" id="paw" style={iStyle}></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/profile">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/survey">Add Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/match">Matches</a>
                        </li>
                    </ul>
                </div>
                <LogoutBtn />
            </nav>
        </>
    );
}


export default Navbar;