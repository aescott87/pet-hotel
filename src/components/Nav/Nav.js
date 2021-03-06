import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './Nav.css'
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';

class App extends Component {

  render() {
    return (
      <>
        <div className="title">
          <h1>Barkingham Pawlace</h1>
        </div>
        <Router>
          <Redirect exact from="/" to="/home" />
          <div className="nav-container">
            <Link to='/home'>
              <div className="nav">
                Dashboard
              </div>
            </Link>
            <Link to='/owners'>
              <div className="nav">
                Manage Owners
              </div>
            </Link>
          </div>
          <Route exact path='/home' component={Dashboard} />
          <Route path='/owners' component={ManageOwners} />
        </Router>
      </>
    );
  }
}

export default connect(mapStoreToProps)(App);
