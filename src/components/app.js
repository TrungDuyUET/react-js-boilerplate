import React, { useEffect } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import UsersContainer from './users/users-container';
import Home from './home/home';
import '../style/_base.scss'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAllUsers } from '../store/actions';

const App = props => {
    useEffect(() => {
        props.getAllUsers();
        
    }, [])
    return (
        <div>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/users">Users</Link>
            <br />
            <Switch>
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/home" render={() => <Home />} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {
    getAllUsers,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);