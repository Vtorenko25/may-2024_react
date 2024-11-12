import React from 'react';

type Params = { id: string }

const PostsPage = async ({params}: { params: Params }) => {

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
        .then(res => res.json());
    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    );
};

export default PostsPage;