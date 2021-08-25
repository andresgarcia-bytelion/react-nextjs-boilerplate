import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Layout from '@/components/layout';
import withAuth from '@/auth/with-auth';
import usePosts from '@/data/posts';

const Home = () => {
  const { posts } = usePosts();

  return (
    <Layout title="Home">
      {
        posts &&
        posts.response &&
        posts.response.map((post, index) => {
          const currDate = new Date(post.timestamp);
          const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currDate);
          const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(currDate);
          const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currDate);
          const readableDate = `${month}-${day}-${year}`;
          return (
            <div key={post.id}>
              <h1>{`Post ${index + 1} - ${readableDate}`}</h1>
              <h2>{post.title}</h2>
              <div>
                {' '}
                {ReactHtmlParser(post.text)}
                {' '}
              </div>
            </div>
          );
        })
      }
    </Layout>
  );
};

export default withAuth(Home);
