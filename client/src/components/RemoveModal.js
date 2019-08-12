import React, { Component } from 'react';
import API from "../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const buttonStyle = {
    float: "right",
    margin: 5
}

class RemoveModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
        }));
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.deleteProfile(this.props._id)
        .then(res => this.props.loadPuppers())
        .catch(err => console.log(err))
};

  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        <Button style={buttonStyle} color="secondary" onClick={this.toggle}>Remove Profile</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="text-info" toggle={this.toggle}><i className="fas fa-paw"></i>&nbsp;&nbsp;Confirm Delete
            </ModalHeader>
            <ModalBody className="text-info">
                Are you sure you want to remove this pupper's profile?    
            </ModalBody>
            <ModalFooter>
                <Button color="info" type="submit" onClick={this.handleFormSubmit}>Confirm</Button>
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
      </div>
    );
  }
}

export default RemoveModal;