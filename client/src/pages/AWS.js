import React, {Component} from "react";
import axios from 'axios';


const uploadBtn = {
    marginTop: 32,
    marginLeft: -10
};


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
        const {value} = event.target;
        this.setState({success: false, url: value});

    };
    handleUpload = (event) => {
        event.preventDefault();
        let file = this.uploadInput.files[0];
        // Split the filename to get the name and type
        let fileParts = this.uploadInput.files[0].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        console.log("Preparing the upload");
        axios.post("https://protected-chamber-61114.herokuapp.com/sign_s3", {
            fileName,
            fileType
        })
            .then(response => {
                const returnData = response.data.data.returnData;
                const signedRequest = returnData.signedRequest;
                const url = returnData.url;
                this.setState({url: url});
                console.log("Recieved a signed request " + signedRequest);

                const options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };
                axios.put(signedRequest, file, options)
                    .then(result => {
                        console.log("Response from s3");
                        this.setState({success: true});
                        this.props.setPupperURL(this.state.url);
                    })
                    .catch(error => {
                        alert("ERROR " + JSON.stringify(error));
                    })
            })
            .catch(error => {
                alert(JSON.stringify(error));
            })
    };

    render() {

        const SuccessMessage = () => (
            <div className='row'>
                <div className='col-md-12 form-group' id='url' value={this.state.url} style={{color: 'green'}}>
                    <small>&nbsp;&nbsp;&nbsp;&nbsp;Succesful Upload!</small>
                </div>
            </div>
        );


        const ErrorMessage = () => (
            <div style={{padding: 50}}>
                <h3 style={{color: 'red'}}>FAILED UPLOAD</h3>
                <span style={{color: 'red', backgroundColor: 'black'}}>ERROR: </span>
                <span>{this.state.errorMessage}</span>
                <br/>
            </div>
        );
        return (
            <>
                <div className="col-md-4 col-xs-12 form-group AWS">
                    <label>Your Pupper's Photo*:</label>
                    <input
                        className="form-control"
                        id="dog-photo"
                        name="url"
                        onChange={this.handleChange}
                        ref={(ref) => {
                            this.uploadInput = ref;
                        }}
                        type="file"
                    />
                    {this.state.success ? <SuccessMessage/> : null}
                    {this.state.error ? <ErrorMessage/> : null}
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



