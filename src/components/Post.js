import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Post = ({ id, content, author, createdAt, edited, comments }) => (
    <Link className="list-item" to={`/posts/${id}`}>
        <h3 className="list-item__title">{author}</h3>
        <p className="list-item__content">{content}</p>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </Link>
);

export default Post;