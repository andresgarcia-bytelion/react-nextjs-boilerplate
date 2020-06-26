/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import App from 'next/app';
import AppContextProvider from '../contexts';

import '../styles/normalize.scss';
import '../styles/global.scss';

class ReturnApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    );
  }
}

export default ReturnApp;
