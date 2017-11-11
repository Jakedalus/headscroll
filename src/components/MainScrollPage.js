import React from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts'
import CreatePostForm from './CreatePostForm';
import PostScroll from './PostScroll';

export class MainScrollPage extends React.Component {

    onSubmit = (post) => {
        this.props.startAddPost(post);

    } 

    render() {
        return (
            <div>
                <CreatePostForm onSubmit={this.onSubmit} s/>
                <PostScroll />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(MainScrollPage);