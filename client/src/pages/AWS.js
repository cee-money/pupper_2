// import React, { Component } from "react";
// import axios from 'axios';

// class AWS extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             success: false,
//             url: "",
//             error: false,
//             errorMessage: ""
//         }
//     }
//     handleChange = (ev) => {
//         this.setState({ success: false, url: "" });

//     }
//     handleUpload = (ev) => {
//         let file = this.uploadInput.files[0];
//         // Split the filename to get the name and type
//         let fileParts = this.uploadInput.files[0].name.split('.');
//         let fileName = fileParts[0];
//         let fileType = fileParts[1];
//         console.log("Preparing the upload");
//         axios.post("http://localhost:3001/sign_s3", {
//             fileName: fileName,
//             fileType: fileType
//         })
//             .then(response => {
//                 var returnData = response.data.data.returnData;
//                 var signedRequest = returnData.signedRequest;
//                 var url = returnData.url;
//                 this.setState({ url: url })
//                 console.log("Recieved a signed request " + signedRequest);

//                 var options = {
//                     headers: {
//                         'Content-Type': fileType
//                     }
//                 };
//                 axios.put(signedRequest, file, options)
//                     .then(result => {
//                         console.log("Response from s3")
//                         this.setState({ success: true });
//                     })
//                     .catch(error => {
//                         alert("ERROR " + JSON.stringify(error));
//                     })
//             })
//             .catch(error => {
//                 alert(JSON.stringify(error));
//             })
//     }
//     render() {
//         const SuccessMessage = () => (
//             <div style={{ padding: 50 }}>
//                 <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
//                 {/* <a href={this.state.url}>Access the file here</a> */}
//                 <br />
//             </div>
//         )
//         const ErrorMessage = () => (
//             <div style={{ padding: 50 }}>
//                 <h3 style={{ color: 'red' }}>FAILED UPLOAD</h3>
//                 <span style={{ color: 'red', backgroundColor: 'black' }}>ERROR: </span>
//                 <span>{this.state.errorMessage}</span>
//                 <br />
//             </div>
//         )
//         return (
//             <div
//                 className="App" >
//                 <label htmlFor='upload' > UPLOAD A FILE </label>
//         <center>
//                         {this.state.success ? <SuccessMessage /> : null}
//                         {this.state.error ? <ErrorMessage /> : null}

//                         <input onChange={this.handleChange} ref={(ref) => {
//                             this.uploadInput = ref;
//                         }} type="file" />
//                         <button onClick={this.handleUpload}>UPLOAD</button>
//                     </center>
//                     </div>
//                         )
//                 }
//             }
//                 export default AWS;