import React, { Component } from 'react';
// import {} from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand">Korzina</a>
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
                                <a href="/login" className="nav-link">Sign in</a>
                            </li>
                        </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
