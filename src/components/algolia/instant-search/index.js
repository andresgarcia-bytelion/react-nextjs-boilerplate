import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

const CustomInstantSearch = ({ indexName, children }) => {
  const searchClient = algoliasearch(
    process.env.algoliaId,
    process.env.algoliaKey,
  );

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <Configure hitsPerPage={10} />
      {children}
    </InstantSearch>
  );
};

export default CustomInstantSearch;
