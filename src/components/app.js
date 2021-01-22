import React, { useEffect } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import UsersContainer from './users/users-container';
import Home from './home/home';
import PostContainer from './posts/post-container';
import '../style/_base.scss'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAllUsers, getAllPosts } from '../store/actions';

const App = props => {
    useEffect(() => {
        props.getAllUsers();
        props.getAllPosts();
    }, [])
    return (
        <div>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/users">Users</Link>
            <br />
            <Link to="/posts">Posts</Link>
            <br />
            <Switch>
                <Route path="/users" component={UsersContainer} />
                <Route path="/home" component={Home} />
                <Route path="/posts" component={PostContainer} />
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
    getAllPosts
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);