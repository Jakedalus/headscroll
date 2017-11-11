import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Post from './Post';

export class PostPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const { id, content, author, createdAt, edited, comments } = this.props.post;

        return (
            <div className="content-container">
                <h2>{author}</h2>
                <p>{content}</p>
                <h3>{moment(createdAt).format('MMMM Do, YYYY')}</h3>
                {edited && <p>Edited</p>}
            </div>
        );
    }

}

const mapStateToProp = (state, props) => {

  return {
    post: state.posts.find(
      post => post.id === props.match.params.pid
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, expense) => dispatch(startEditPost(id, expense)),
  startRemovePost: data => dispatch(startRemovePost(data))
});

export default connect(mapStateToProp, mapDispatchToProps)(PostPage);