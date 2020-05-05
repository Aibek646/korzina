import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'

class Register extends Component {
    render() {
        return (
            <div>
                <Modal size="sm"
                    show={this.props.appear}
                    // onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                    >
                    <Modal.Header>
                       <Modal.Title id="example-modal-sizes-title-sm">
                            Sign in
                       </Modal.Title>
                        <button type="button" className="float-right btn btn-danger btn-sm" onClick={this.props.close}>X</button>
                    </Modal.Header>

                    <Modal.Body>
                      <form>
                         <div className="form=group">
                                <label for="exampleInputEmail1">Name</label>
                                <br></br>
                             <input type="text" id="username" name="username"></input>
                         </div>
                            <div className="form=group">
                                <label for="exampleInputEmail1">Password</label>
                                <br></br>
                                <input type="text" id="username" name="username"></input>
                            </div>
                            <br></br>
                            <button type="button" className="btn btn-light btn-sm">Login</button>
                      </form>
                        <a href="/register" className="nav-link">Create an account</a>
                        
                   </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Register;
