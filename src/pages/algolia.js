import React from 'react';
import Layout from '../components/layout';
import CustomInstantSearch from '../components/algolia/instant-search';
import CustomSearchBox from '../components/algolia/search-box';
import CustomMenus from '../components/algolia/menus';
import CustomMenu from '../components/algolia/menu';
import CustomClearRefinements from '../components/algolia/clear-refinements';
import CustomSortBys from '../components/algolia/sort-bys';
import CustomSortBy from '../components/algolia/sort-by';
import CustomHits from '../components/algolia/hits';
import CustomPagination from '../components/algolia/pagination';
import CustomToggleRefinement from '../components/algolia/toggle-refinement';

const Algolia = () => {
  const rootIndex = process.env.algoliaIndex;

  return (
    <Layout title="Algolia">
      <CustomInstantSearch indexName={rootIndex}>
        <CustomSearchBox placeholder="Search all content…" />
        <CustomMenus>
          <CustomMenu attribute="authorname" label="Authorname" />
          <CustomClearRefinements />
        </CustomMenus>
        <CustomToggleRefinement
          attribute="title"
          value=""
          label="Toggle based on value"
        />
        <CustomHits type="base">
          <CustomSortBys>
            <CustomSortBy
              items={[
                {
                  value: `${rootIndex}_Date_Created_Asc`,
                  label: 'Date Created asc.',
                },
                {
                  value: `${rootIndex}_Date_Created_Desc`,
                  label: 'Date Created desc.',
                },
              ]}
              defaultRefinement={rootIndex}
              label="Date Created"
            />
            <CustomSortBy
              items={[
                {
                  value: `${rootIndex}_Date_Used_Asc`,
                  label: 'Date Used asc.',
                },
                {
                  value: `${rootIndex}_Date_Used_Desc`,
                  label: 'Date Used desc.',
                },
              ]}
              defaultRefinement={rootIndex}
              label="Date Used"
            />
            <CustomSortBy
              items={[
                {
                  value: `${rootIndex}_Name_Asc`,
                  label: 'Name asc.',
                },
                {
                  value: `${rootIndex}_Name_Desc`,
                  label: 'Name desc.',
                },
              ]}
              defaultRefinement={rootIndex}
              label="Name"
            />
          </CustomSortBys>
        </CustomHits>
        <CustomPagination defaultRefinement={1} />
      </CustomInstantSearch>
    </Layout>
  );
};

export default Algolia;
