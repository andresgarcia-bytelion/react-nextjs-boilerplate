import React from 'react';
import Layout from '@/components/layout';
import withAuth from '@/auth/with-auth';
import useUsers from '@/data/users';
import SimpleCard from '@/components/simple-card';

const Home = () => {
  const { users } = useUsers();

  return (
    <Layout title="Home">
      <p
        style={{
          wordBreak: 'break-all',
        }}
      >
        {JSON.stringify(users)}
        {
          users && users.length > 0 && users.map(user =>
            <SimpleCard key={user.id} user={user} />)
        }
        {
          !users &&
          "You got nothin'"
        }
      </p>
      <p>Home</p>
    </Layout>
  );
};

export default withAuth(Home);
