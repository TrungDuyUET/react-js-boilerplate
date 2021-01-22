import React from 'react';
import { connect } from 'react-redux';
import UsersList from './users-list';
class UsersContainer extends React.Component {

    render() {
        const { users = [] } = this.props;

        return <UsersList users={users} />;
    }

}

const mapStateToProps = state => {
    return {
        users: state.user.all
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);