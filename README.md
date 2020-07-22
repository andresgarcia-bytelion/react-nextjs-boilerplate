# Bytelion React Boilerplate

This boilerplate was built with [React](https://reactjs.org/) + [Nextjs](https://nextjs.org/) and is meant to serve as a concrete starting point to any webapp.

## Running the Project

```
npm install
npm run dev
```

### Run Concurrently

Sometimes you'll be running two project at once. Since the port is fixed to 3000 there is a separate script to run on a different port:

```
npm run custom
```

## Project Structure

`/src`:
  * `/components`: generic components pertaining to most projects, includes default algolia components
  * `/contexts`: page persistent context provider
  * `/hooks`: useful functions to use within react
  * `/icons`: svg icons that can be integrated into react
  * `/lib`: vendor files
  * `/pages`: any js file here will be automatically connected to a nextjs route
  * `/services`: main facility for managing api calls on the front end
  * `/styles`: contains generic global styles, useful mixins, typographic base, and project variables
`.editorconfig`: will automatically structure indentation if you have the editorconfig plugin
`.eslintrc`: main linting configuration
`next.config.js`: contains environment variables and plugin configurations for nextjs

## Algolia

Algolia components are included by default. A default algolia page was created as an initial playground for styling and testing components. To inject your own Algolia settings you'll need to edit the following variables in `next.config.js`:

* `algoliaId`: API Keys >> Algolia _Application ID_,
* `algoliaKey`: API Keys >> Algolia _Search-Only API Key_,
* `algoliaIndex`: Indices >> Name of the Algolia index you wish to search

### Customizing Hits Per Page

By default the Configure component within `/src/algolia/instant-search` is set to 10. Simply change that number to effect how many hits will show on each paginated page.

### Sort By Placeholder

The Sort By component helps sort hits given a replica index. But in some designs not all attributes are sortable. In this case the Sort By Placeholder was created to mimic the look of a Sort By component without the functionality.


## Environment Variables

All environment variables are available to use through `process.env`. Any custom environment variables can go directly in the `env: {}` object within `next.config.js`.


## Optional Hygen Scaffolding

[Hygen](https://www.hygen.io/templates/) provides a quick and easy way to scaffold components into your webapp without the manual digging. The following Hygen cli commands are currently available:

```
hygen component --name creative-name new
hygen page --name about new
```
