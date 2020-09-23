import React from 'react';
import PropTypes from 'prop-types';

interface IPosts {
  posts: Array<any>;
  loading: boolean;
}

const Posts: React.FC<IPosts> = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <ul>
      {posts && posts.length > 0
        ? posts.map((post: any) => (
            <li key={post.id} className=''>
                {post.title}
            </li>
        )) : null}
    </ul>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Posts;
