/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import App from 'next/app';

import '../styles/normalize.scss';
import '../styles/global.scss';

class ReturnApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default ReturnApp;
