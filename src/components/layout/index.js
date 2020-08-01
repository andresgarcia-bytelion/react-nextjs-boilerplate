import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import styles from './styles.module.scss';

const site = {
  title: 'React Boilerplate',
  description: 'A react boilerplate made from corgis',
};

const Layout = ({ title, children }) => (
  <div className={styles.page}>
    <Head>
      <title>{`${site.title} | ${title}`}</title>
      <meta
        name="description"
        content={site.description}
      />
    </Head>
    <Header />
    <main className={styles.pageMain}>
      <div className={styles.pageMainInner}>{children}</div>
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
