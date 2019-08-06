import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BorkModal extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BorkModal;

// to contact another owner

{/* <div className="container text-info bg-active">
<div className="row">
    <div className="col-12">
        <div className="modal fade" id="bork-box" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="title"><i className="fas fa-paw"></i>&nbsp;&nbsp;Bork at your match</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form method="POST" action="send">
                    <div className="form-group">
                        <label>Your First Name</label>
                        <input className="form-control col-md-4" type="text" name="name" id="modalname"/>
                        <br/>
                            <label>Your Email Address</label>
                        <input className="form-control col-md-8" type="email" name="email" id="modalemail"/>
                        <br/>  
                        <label for="contactbox">Your Bork</label>
                        <textarea className="form-control col-md-12" type="text" name="message" id="contactbox" rows="5">My pup would love to meet yours!</textarea>
                        <br/>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-info" type="sumbit" id="send">Bork!</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>  */}
