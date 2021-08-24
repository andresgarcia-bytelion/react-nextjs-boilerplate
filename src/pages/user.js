import React from 'react';
import Layout from '@/components/layout';
import Table from '@/components/table';
import withAuth from '@/auth/with-auth';
import useUsers from '@/data/users';

const Users = () => {
  const { users } = useUsers();

  const headers = ['Row One', 'Any Label', 'You Choose'];
  const data = [
    {
      rowOne: 'For Your Eyes Only',
      anyKey: 'The Spy Who Loved Me',
      anything: 'Moonraker',
    },
    {
      rowOne: 'A View of a Spy Who Died And Praised South Park',
      anyKey: 'Tomorrow Never Dies',
      anything: 'Live and Let Die',
    },
    {
      rowOne: 'Thunderball',
      anyKey: 'Goldeneye',
      anything: 'Dr No.',
    },
  ];

  return (
    <Layout title="Table">
      <p
        style={{
          wordBreak: 'break-all',
        }}
      >
        hi!
      </p>
    </Layout>
  );
};

export default withAuth(Users);
