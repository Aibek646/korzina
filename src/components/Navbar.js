import React, { Component } from 'react';
import RegisterModal from './RegisterModal'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


// import {} from 'react-bootstrap';

class Navbar extends Component {
    
    state = {
        modal: false,
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {

    }

    show = () => {
        this.setState({
            modal: true
        })
    }


    close = () => {
        this.setState({
            modal:false
        })
    }


    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a href="/" className="navbar-brand main-text">KORZINA</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            {  this.props.currentUser ?
                          <>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/men">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="/signout" className="nav-link" onClick={this.props.logout}>Sign out</a>
                            </li>
                           </>
                              :

                            <>
                            <li className="nav-item">
                             <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/men">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                        <NavLink className="nav-link"  to="/signin" onClick={this.show}>Sign in</NavLink>
                                <RegisterModal appear={this.state.modal} close={this.close} setCurrentUser={this.props.setCurrentUser} history={this.props.history}/>
                            </li>
                            </>
                            }

                        </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default Navbar;
