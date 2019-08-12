import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


class BorkModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      recipient: this.props.recipientEmail,
      message: ""
    }

    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleInputChange = event => {

    const { value } = event.target;

    this.setState({
      message: value,

    });
  }

  handleFormSubmit = event =>{
    event.preventDefault();  

    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name: this.props.user.given_name,
            email: this.props.user.email,
            recipient: this.state.recipient,
            message: this.state.message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div>
        <Button className="btn btn-secondary btn-sm contact-btn" onClick={this.toggle}>Contact</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="text-info bg-active">
          <ModalHeader toggle={this.toggle}className="modal-title" id="title" >
            <i className="fas fa-paw"></i>&nbsp;&nbsp;Bork at your match
          </ModalHeader>
          <ModalBody>
            <form method="POST" action="send">
              <div className="form-group">
                  <label>Your Bork</label>
                  <textarea className="form-control col-md-12" type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange} rows="5" placeholder="My pup would love to meet yours!"></textarea>
                    <br/>
                </div>
              </form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-info" type="sumbit" id="send" onClick={this.handleFormSubmit}>Bork!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BorkModal;

