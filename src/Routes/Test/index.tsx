import React, { useState, useEffect } from 'react';
import { testApi } from 'apis';
import Posts from 'Components/Posts';
import Pagination from 'Components/Pagination';

function Test() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  // const [postPerPage, sestPostPerPage] = useState(10);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data } = await testApi.getPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfPageLast = curPage * postPerPage;
  const indexOfPageFirst = indexOfPageLast - postPerPage;
  const curPosts = posts.slice(indexOfPageFirst, indexOfPageLast);

  const clickPagination = (page: number) => {
    setCurPage(page);
  };

  return (
        <div>
            <h1>My Docs</h1>
            <Posts posts={curPosts} loading={loading} />
            <Pagination
                curPage={curPage}
                postPerPage={postPerPage}
                totalPosts={posts.length}
                onChangePage={clickPagination}
            />
        </div>
  );
}

export default Test;
