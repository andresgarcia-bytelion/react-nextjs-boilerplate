import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Layout from 'components/layout';

const Home = () => {
  const [session] = useSession();

  return (
    <Layout title="Home">
      <h2>Home</h2>
      <p>{`User: ${JSON.stringify(session)}`}</p>
      {!session && <button onClick={signIn} type="button">Sign in</button>}
      {session && <button onClick={signOut} type="button">Sign out</button>}
    </Layout>
  );
};

export default Home;
