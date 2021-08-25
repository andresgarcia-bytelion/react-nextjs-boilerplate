import React from 'react';
import Layout from '@/components/layout';
import Table from '@/components/table';
import withAuth from '@/auth/with-auth';
import useUsers from '@/data/users';
import { useAppContext } from '@/contexts/index';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Users = () => {
  const { currentCardUser } = useAppContext();
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/users/${id}`);

  return (
    <Layout title="Table">
      <p
        style={{
          wordBreak: 'break-all',
        }}
      >
        {data && `hi ${data.nameFirst}!`}
      </p>
      <p>{error && error.message}</p>
    </Layout>
  );
};

export default withAuth(Users);
