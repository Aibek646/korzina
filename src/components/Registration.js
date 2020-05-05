import React, { Component } from 'react';
import axios from 'axios'
import UserModel from '../models/user'

class Registration extends Component {

   state = {
       username: '',
       password: '',
       password2: '',
   }


   handleSubmit = (event) => {
       event.preventDefault()

       const user = {
           username: this.state.username,
           password: this.state.password,
       }

       UserModel.create(this.state)
       .then(res => {
           console.log(res);
           console.log(res.data)
       })
       .catch((err) => console.log(err))

   }


handleChange = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    })
}

    render() {
        return (
            <div className="container mt-5" id="registcontainer">
                <div className="row justify-content-center">
            <form onSubmit={this.handleSubmit}>    
                <div class="form-group row">
                        <div className="col-xs-3">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} name="username"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                       </div>
                  </div>
                    <div class="form-group row">
                        <div className="col-xs-4">
                        <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
                        </div>
                    </div>
                        <div class="form-group row">
                            <div className="col-xs-4">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" className="form-control" id="password2" placeholder="Password" value={this.state.password2} name="password2" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-light btn-sm">Register</button>
                   </form>
                </div>
            </div>
        );
    }
}

export default Registration;
