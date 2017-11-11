import React from 'react';
import moment from 'moment';


export default class CreatePostForm extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          content: props.expense ? props.expense.content : "",
          author: props.expense ? props.expense.author : "",
          createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
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

        this.setState(() => ({ error: "" }));

        this.props.onSubmit({
            content: this.state.content,
            author: this.state.author,
            createdAt: this.state.createdAt.valueOf(),
            edited: this.state.edited,
            comments: this.state.comments
        });
        
    };
    
    render() {
        return (
            <div>
                {this.state.error && <p className="add-post-error">{this.state.error}</p>}
                <form className="add-post" onSubmit={this.onSubmit}>
                    <input 
                        className="add-post__input" 
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
