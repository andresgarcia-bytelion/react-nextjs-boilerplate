/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import App from 'next/app';
import { Provider } from 'next-auth/client';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import AppContextProvider from 'contexts';

import 'styles/normalize.scss';
import 'styles/global.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

class ReturnApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContextProvider>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </AppContextProvider>
    );
  }
}

export default ReturnApp;
