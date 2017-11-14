import React from 'react';
import moment from 'moment';
import { firebase } from '../firebase/firebase';


export default class CreatePostForm extends React.Component {
    
    constructor(props) {
        super(props);
        const userDisplayName = firebase.auth().currentUser.displayName;

        this.state = {
          content: props.post ? props.post.content : "",
          author: userDisplayName,
          createdAt: props.post ? moment(props.post.createdAt) : moment(),
          edited: false,
          comments: [],
          error: ""
        };
    }

    onContentChange = e => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.content) {
            // Set error state 'please provide description and amount'
            this.setState(() => ({ error: "Please provide description and amount" }));
        } else {
            this.setState(() => ({ error: "" }));

            this.props.onSubmit({
                content: this.state.content,
                author: this.state.author,
                createdAt: this.state.createdAt.valueOf(),
                edited: this.state.edited,
                comments: this.state.comments
            });
            this.state.content = '';
        }
        
    };
    
    render() {
        return (
            <div className="post-form__container">
                <h1 className="post-form__title ">Make a post</h1>
                {this.state.error && <p className="post-form__error">{this.state.error}</p>}
                <form className="post-form" onSubmit={this.onSubmit}>
                    <textarea 
                        className="post-form__textarea" 
                        type="text" 
                        name="post"
                        value={this.state.content}
                        onChange={this.onContentChange}    
                    />
                    <button className="button">Add Post</button>
                </form>
            </div>
        );
    }
}
