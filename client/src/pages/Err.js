import React from "react";


function Err() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-12">
                    <br/>
                    <img src="../../assets/images/saddog.jpeg" alt="Pic"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-info">
                    <h1>Sorry, that page doesn't exist.</h1>
                </div>
            </div>
        </div>
    )
}

export default Err;