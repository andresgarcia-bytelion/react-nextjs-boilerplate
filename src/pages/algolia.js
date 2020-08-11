import React from 'react';
import Layout from 'components/layout';
import {
  ClearRefinements,
  Hits,
  InstantSearch,
  Menu,
  Menus,
  Pagination,
  SearchBox,
  SortBy,
  SortByPlaceholder,
  SortBys,
  ToggleRefinement,
} from 'components/algolia';

const Algolia = () => {
  const index = process.env.algoliaIndex;

  return (
    <Layout title="Algolia">
      <InstantSearch indexName={index}>
        <SearchBox placeholder="Search all content…" />
        <Menus>
          <Menu attribute="authorname" label="Authorname" />
          <ClearRefinements />
        </Menus>
        <ToggleRefinement
          attribute="title"
          value=""
          label="Toggle based on value"
        />
        <Hits type="base">
          <SortBys>
            <SortBy
              items={[
                {
                  value: `${index}_Date_Created_Asc`,
                  label: 'Date Created asc.',
                },
                {
                  value: `${index}_Date_Created_Desc`,
                  label: 'Date Created desc.',
                },
              ]}
              defaultRefinement={index}
              label="Date Created"
            />
            <SortBy
              items={[
                {
                  value: `${index}_Name_Asc`,
                  label: 'Name asc.',
                },
                {
                  value: `${index}_Name_Desc`,
                  label: 'Name desc.',
                },
              ]}
              defaultRefinement={index}
              label="Name"
            />
            <SortByPlaceholder label="Test" />
          </SortBys>
        </Hits>
        <Pagination defaultRefinement={1} />
      </InstantSearch>
    </Layout>
  );
};

export default Algolia;
