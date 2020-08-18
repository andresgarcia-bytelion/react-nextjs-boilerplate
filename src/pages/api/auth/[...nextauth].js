import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  database: '',
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    /**
    * @param  {string} url      URL provided as callback URL by the client
    * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
    * @return {string}          URL the client will be redirect to
    */
    redirect: async (url, baseUrl) => Promise.resolve(baseUrl),
  },
  providers: [
    Providers.Auth0({
      clientId: process.env.auth0ClientId,
      clientSecret: process.env.auth0ClientSecret,
      domain: process.env.auth0Domain,
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
