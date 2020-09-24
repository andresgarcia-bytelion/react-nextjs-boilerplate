# Bytelion React Nextjs Boilerplate

This boilerplate is built with [React](https://reactjs.org/) + [Nextjs](https://nextjs.org/) and is meant to serve as a concrete starting point for any webapp.

## Getting Started

Once you've downloaded this repo into your project, dive into your project's terminal and enter the following:

```
npm install
npm run dev
```

### Run Concurrently

Sometimes you'll be running two project at once. Since the port is fixed to 3000 there is a separate script to run on port 8080:

```
npm run custom
```

## Project Structure

* `/src/`:
  * `components`: generic components pertaining to most projects, includes default algolia components
  * `contexts`: page persistent context provider
  * `hooks`: useful functions to use within react
  * `icons`: svg icons that can be integrated into react
  * `lib`: vendor files
  * `pages`: any js file here will be automatically connected to a nextjs route
  * `services`: main facility for managing api calls on the front end
  * `styles`: contains generic global styles, useful mixins, typographic base, and project variables

* `.editorconfig`: will automatically structure indentation if you have the editorconfig plugin
* `.eslintrc`: main linting configuration
* `next.config.js`: contains environment variables and plugin configurations for nextjs

## Environment Variables

All environment variables are available to use through `process.env`. Any custom environment variables can go directly in the `env: {}` object within `next.config.js`.

## Auth0 Authentication

Authentication is managed through the [https://github.com/auth0/nextjs-auth0](nextjs-auth0) library which follows the [https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/](best practices) outlined by the Auth0 team.

### withAuth Flow
![withAuth web sequence diagram](https://cdn.auth0.com/blog/nextjs-authn-auth0/static-site-authentication.png)

### Secured API Flow
![secure api web sequence diagram](https://cdn.auth0.com/blog/nextjs-authn-auth0/static-site-api-calls.png)

## Optional Hygen Scaffolding

[Hygen](https://www.hygen.io/templates/) provides a quick and easy way to scaffold components into your webapp without the manual digging. The following Hygen cli commands are currently available:

```
hygen component --name creative-name new
hygen page --name about new
```
