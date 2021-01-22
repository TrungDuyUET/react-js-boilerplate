import React from 'react';
import { connect } from 'react-redux';

const PostContainer = ({ posts }) => {
    return posts.map((post, i) => {
        return (
            <div key={i}><b>{post.userId}</b> - <i>{post.title}</i></div>
        );
    })
}
const mapStateToProps = state => {
    return {
        posts: state.posts.post
    }
}
export default connect(mapStateToProps, null)(PostContainer);

