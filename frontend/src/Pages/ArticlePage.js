import React, { Fragment, useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../Pages/NotFoundPage';
import CommentsList from '../components/CommentsList';
import VotesSection from '../components/VotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [votes, setVotes] = useState({votes:0});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const voteResult = await fetch(`${process.env.REACT_APP_SERVICE_URI}/api/v1/votes/${name}`);
            const voteBody = await voteResult.json();
            setVotes(voteBody);

            const commentResult = await fetch(`${process.env.REACT_APP_SERVICE_URI}/api/v1/comments/${name}`);
            const commentBody = await commentResult.json();
            setComments(commentBody);
        }
        fetchData();
    }, [name]);

    if (!article) {
        return <NotFoundPage />
    }

    const otherArticles = articleContent.filter(article => article.name !== name)

    return (
        <Fragment>
            <h1>{ article.title }</h1>
            <VotesSection articleName={name} votes={votes.votes} setVotes={setVotes}/>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <AddCommentForm articleName={name} setComments={setComments} comments={comments}/>
            <CommentsList comments={comments}></CommentsList>
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </Fragment>
    );
};

export default ArticlePage;