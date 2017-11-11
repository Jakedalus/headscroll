import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Post = ({ id, content, author, createdAt, edited, comments }) => (
    <Link className="list-item" to={`/posts/${id}`}>
        <div>
            <h3 className="list-item__title">{content}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{author}</h3>
    </Link>
);

export default Post;