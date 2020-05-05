import React, { Component } from 'react';
import RegisterModal from './RegisterModal'
// import {} from 'react-bootstrap';

class Navbar extends Component {
    
    state = {
        modal: false,
        username: '',
        password: '',
    }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }


    // handleSubmit = (event) => {

    // }

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
                            

                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/men" className="nav-link">Men</a>
                            </li>
                            <li className="nav-item">
                                <a href="/profile" className="nav-link">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href="/signout" className="nav-link" onClick={this.props.logout}>Sign out</a>
                            </li>




                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/men" className="nav-link">Men</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={this.show}>Sign in</a>
                                <RegisterModal appear={this.state.modal} close={this.close} />
                            </li>



                        </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default Navbar;
