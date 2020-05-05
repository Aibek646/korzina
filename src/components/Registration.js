import React, { Component } from 'react';

class Registration extends Component {

   state = {
       username: '',
       password: '',
       password2: '',
   }


   handleSubmit = (event) => {
       event.preventDefault()
       
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
            <form onSubmit="">    
                <div class="form-group row">
                        <div className="col-xs-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleChange} name="username"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                       </div>
                  </div>
                    <div class="form-group row">
                        <div className="col-xs-4">
                        <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
                        </div>
                    </div>
                        <div class="form-group row">
                            <div className="col-xs-4">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password2} name="password2" onChange={this.handleChange}/>
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
