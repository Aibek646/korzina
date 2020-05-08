import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Men from '../components/Men'
import Registration from '../components/Registration'
import noMatch from '../components/noMatch'
import RegisterModal from '../components/RegisterModal'
import ItemShow from '../components/ItemShow'


export default (props) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/men' component={Men} />

        {/* <Route path='/signin' render={ (routeProps) => {
                      return <RegisterModal {...routeProps}
                      setCurrentUser={props.setCurrentUser}
                      />
                    } }/> */}
                    {/* <Route path='/signin' component={RegisterModal}/> */}

        <Route path='/register' component={Registration} />
        <Route path='/items/itemshow/:id' component={ItemShow}/>
        <Route component={noMatch} />

    </Switch>
)