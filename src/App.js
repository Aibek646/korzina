import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Men from './components/Men'
import Login from './components/Login'
import noMatch from './components/noMatch'
import RegisterModal from './components/RegisterModal'
import Registration from './components/Registration'
import Profile from './components/Profile'
import UserModel from './models/user';

class App extends Component {
    state = {
      currentUser: localStorage.getItem('uid')
    }

    setCurrentUser = (userId) => {
        this.setState({
          currentUser: userId
        })
        localStorage.setItem('uid', userId)
    }

    logout = (event) => {
      event.preventDefault()
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
            <Navbar logout={this.logout}/>
              <Router>
                <Switch>
                  
                    <Route exact path='/' component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/men' component={Men}/>
                    
                    <Route path='/signin' render={ (routeProps) => {
                      return <RegisterModal {...routeProps}
                      setCurrentUser={this.setCurrentUser}/>
                    } }/>

                    <Route path='/register' component={Registration}/>
                    <Route component={noMatch}/>
                    
                </Switch>
              </Router>
          </React.Fragment>
  
  );
  }
}

export default App;
