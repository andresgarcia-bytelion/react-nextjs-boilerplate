import React from 'react';
import { providers, signIn } from 'next-auth/client';

export default function SignIn({ auth0providers }) {
  return (
    <>
      {Object.values(auth0providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)} type="button">
            Sign in with
            {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

SignIn.getInitialProps = async (context) => ({
  auth0providers: await providers(context),
});
