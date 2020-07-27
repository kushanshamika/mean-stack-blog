import React from 'react';

const VotesSection = ({ articleName, votes, setVotes}) => {
    const voteArticle = async () => {
        const result = await fetch(`${process.env.REACT_APP_SERVICE_URI}/api/v1/votes/${articleName}`,{
            method:'post',
        });
        const body = await result.json();
        setVotes(body);
    }

    return (
        <div id="upvotes-section">
            <button onClick={() => voteArticle()}>Add Upvote</button>
            <p>This post has been upvoted {votes} times</p>
        </div>
    );
}

export default VotesSection;