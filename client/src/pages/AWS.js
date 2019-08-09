import React, { Component } from "react";
import axios from 'axios';


const uploadBtn = {
    marginTop: 32,
    marginLeft: -10
}


class AWS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            url: "",
            error: false,
            errorMessage: ""
        }
    }
    handleChange = (event) => {
       const {value} = event.target
        this.setState({ success: false, url: value });

    }
    handleUpload = (event) => {
       event.preventDefault();
        let file = this.uploadInput.files[0];
        // Split the filename to get the name and type
        let fileParts = this.uploadInput.files[0].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        console.log("Preparing the upload");
        axios.post("http://localhost:6969/sign_s3", {
            fileName: fileName,
            fileType: fileType
        })
            .then(response => {
                var returnData = response.data.data.returnData;
                var signedRequest = returnData.signedRequest;
                var url = returnData.url;
                this.setState({ url: url })
                console.log("Recieved a signed request " + signedRequest);

                var options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };
                axios.put(signedRequest, file, options)
                    .then(result => {
                        console.log("Response from s3")
                        this.setState({ success: true });
                    })
                    .catch(error => {
                        alert("ERROR " + JSON.stringify(error));
                    })
            })
            .catch(error => {
                alert(JSON.stringify(error));
            })
    }
    render() {
        const SuccessMessage = () => (
            <div style={{ padding: 50 }}>
                <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
                {/* <a href={this.state.url}>Access the file here</a> */}
                <br />
            </div>
        )
        const ErrorMessage = () => (
            <div style={{ padding: 50 }}>
                <h3 style={{ color: 'red' }}>FAILED UPLOAD</h3>
                <span style={{ color: 'red', backgroundColor: 'black' }}>ERROR: </span>
                <span>{this.state.errorMessage}</span>
                <br />
            </div>
        )
        return (
            <>
            {console.log(this.props.url)}
            <div className="col-md-4 col-xs-12 form-group App">
                <label>Your Pupper's Photo*:</label>
                <center>
                    {this.state.success ? <SuccessMessage /> : null}
                    {this.state.error ? <ErrorMessage /> : null}
                    <input
                        className="form-control"
                        id="dog-photo"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleChange}
                        ref={(ref) => { this.uploadInput = ref; }}
                        type="file"
                    />
                </center>
            </div>
            <div className="col-md-2 col-xs-12 form-group">
                <button
                    className="btn btn-info btn-sm"
                    onClick={this.handleUpload}
                    style={uploadBtn}>Upload
                </button>
            </div>
            </>
        )
    }
}
export default AWS;