# Bytelion React Boilerplate

[React](https://reactjs.org/) + [Nextjs](https://nextjs.org/)


## Running the Project

```
npm install
npm run dev
```


## Algolia

Algolia components are included by default. A default algolia page was created as an initial playground for styling and testing components. To inject your own Algolia settings you'll need to edit the following variables in `next.config.js`:

* `algoliaId`: API Keys >> Algolia _Application ID_,
* `algoliaKey`: API Keys >> Algolia _Search-Only API Key_,
* `algoliaIndex`: Indices >> Name of the Algolia index you wish to search


## Environment Variables

All environment variables are available to use through `process.env`. Any custom environment variables can go directly in the `env: {}` object within `next.config.js`.


## Optional Hygen Scaffolding

[Hygen](https://www.hygen.io/templates/) provides a quick and easy way to scaffold components into your webapp without the manual digging. The following Hygen cli commands are currently available:

```
hygen component --name creative-name new
hygen page --name about new
```
