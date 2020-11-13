import React from 'react';
import Layout from '@/components/layout';
import withAuth from 'auth/with-auth';

const Home = () => (
  <Layout title="Home">
    Home
  </Layout>
);

export default withAuth(Home);
