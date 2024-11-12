import React from 'react';

type Params = { id: string }

const CommentsPage = async ({params}: { params: Params }) => {

    const comments = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id)
        .then(res => res.json());
    return (
        <div>
            {JSON.stringify(comments)}
        </div>
    );
};

export default CommentsPage;