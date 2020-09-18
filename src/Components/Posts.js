import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <ul>
            {posts && posts.length > 0 ?
                posts.map(post => (
                    <li key={post.id} className=''>
                        {post.title}
                    </li>
                )) : null}
        </ul>
    )
}

export default Posts;