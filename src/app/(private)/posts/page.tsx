import React from 'react';
import PostsComponent from "@/app/components/PostsComponent";



const PostsPage = async () => {

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());


    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;