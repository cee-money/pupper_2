import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SuccessModal extends Component {
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

  render() {
    return (
      <div>
        <Button color="info" type="submit" onClick={this.toggle}>Submit</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="text-info" toggle={this.toggle}><i className="fas fa-paw"></i>&nbsp;&nbsp;Profile Saved
            </ModalHeader>
            <ModalBody className="text-info">
                Thanks for telling us about your pup! Click close to add another profile for your other pup/pups. Or click next to tell us about ideal playmates.    
            </ModalBody>
            <ModalFooter>
                <Button color="info" href="/match">Next</Button>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
            </Modal>
      </div>
    );
  }
}

export default SuccessModal;
