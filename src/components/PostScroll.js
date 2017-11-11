import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

export const PostScroll = (props) => (
    <div className="list-body">
        {
            props.posts.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No posts</span>
                </div>
            ) : (
                props.posts.map((post) => (
                    <Post key={post.id} {...post}/>))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(PostScroll);