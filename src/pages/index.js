import React from 'react';
import Layout from '@/components/layout';
import withAuth from '@/components/auth/with-auth';

const Home = () => (
  <Layout title="Home">
    Home
  </Layout>
);

export default withAuth(Home);
