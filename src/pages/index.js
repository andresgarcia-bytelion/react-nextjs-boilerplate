import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Button, Modal } from '@material-ui/core';
import Layout from '@/components/layout';
import withAuth from '@/auth/with-auth';
import usePosts from '@/data/posts';

const Home = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = setOpen(true);
  // const handleClose = setOpen(false);

  let { posts } = usePosts();
  const URL = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/andresgarcia/';

  const deletePost = async (postId) => {
    const response = await fetch(`${URL}${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  };

  return (
    <Layout title="Home">
      {
        posts &&
        posts.response &&
        posts.response.map((post, index) => {
          let readableDate = 'undefined';
          if (post.timestamp) {
            const currDate = new Date(post.timestamp);
            const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currDate);
            const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(currDate);
            const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currDate);
            readableDate = `${month}-${day}-${year}`;
          }

          return (
            <div key={post.id}>
              <h1 id={post.id}>{`Post ${index + 1} - ${readableDate}`}</h1>
              <h2>{post.title}</h2>
              <div>
                {' '}
                {ReactHtmlParser(post.text)}
                {' '}
              </div>
              <div>
                <Button variant="contained" color="primary" onClick={() => { }}>Edit</Button>
                {'  '}
                <Button variant="contained" color="secondary" onClick={async () => {
                  await deletePost(post.id);
                  location.reload();
                }}>Delete</Button>
              </div>
            </div>
          );
        })
      }
    </Layout>
  );
};

export default withAuth(Home);
