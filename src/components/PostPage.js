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
            <div className="content-container content-container--post-page">
                <div className="list-item list-item--post-page">
                    <h2 className="list-item__title">{author}</h2>
                    <p className="list-item__content">{content}</p>
                    <h3 className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</h3>
                    {edited && <p>Edited</p>}
                </div>
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