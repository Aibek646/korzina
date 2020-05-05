import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import UserModel from '../models/user'

class Register extends Component {

     
    state = {
        username: '',
        password: ''
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            this.props.history.push('/profile')
        })
        .catch((err) => console.log(err))
    }




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
                      <form onSubmit={this.handleSubmit}>
                         <div className="form=group">
                                <label for="exampleInputEmail1">Name</label>
                                <br></br>
                             <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}></input>
                         </div>
                            <div className="form=group">
                                <label for="exampleInputEmail1">Password</label>
                                <br></br>
                                <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
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
