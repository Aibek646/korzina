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

class App extends Component {
  
  
  render() {
    return (
          <React.Fragment>
            <Navbar/>
              <Router>
                <Switch>
                  
                    <Route exact path='/' component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/men' component={Men}/>
                    {/* <Route path='/signin' component={RegisterModal}/> */}
                    <Route path='/register' component={Registration}/>
                    <Route component={noMatch}/>
                    
                </Switch>
              </Router>
          </React.Fragment>
  
  );
  }
}

export default App;
