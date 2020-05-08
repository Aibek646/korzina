import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Men from './components/Men'
// import Login from './components/Login'
// import noMatch from './components/noMatch'
// import RegisterModal from './components/RegisterModal'
// import Registration from './components/Registration'
// import Profile from './components/Profile'
import UserModel from './models/user';

class App extends Component {
    state = {
      currentUser: localStorage.getItem('uid'),

    }


    setCurrentUser = (userId) => {
        this.setState({
          currentUser: userId
        })
        localStorage.setItem('uid', userId)
        console.log(this.state.currentUser)
    }

    logout = (event) => {
      event.preventDefault()
      localStorage.removeItem('uid')
       UserModel.logout()
       .then(res => {
         console.log(res)
         this.setState({
           currentUser: null
         })
         this.props.history.push('/')
       })
       .catch(err => console.log(err))
    }
  
  render() {
    return (
          <React.Fragment>
            <Navbar logout={this.logout} setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} history={this.props.history}/>
            <Routes currentUser={this.state.currentUser}/>
          </React.Fragment>
  
  );
  }
}

export default withRouter(App);
