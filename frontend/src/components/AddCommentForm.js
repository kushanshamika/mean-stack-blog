import React, { useState } from 'react';

const AddCommentForm = ({articleName, setComments, comments}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`${process.env.REACT_APP_SERVICE_URI}/api/v1/comments`, {
            method: 'post',
            body: JSON.stringify({
                name: articleName,
                username: username,
                comment: commentText
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setComments(comments.concat(body));
        setUsername('');
        setCommentText('');
    }
    
    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(event) => {setUsername(event.target.value)}} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => {setCommentText(event.target.value)}}/>
            </label>
            <button onClick={() => {addComment()}}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;