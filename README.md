<p align='center'>
  <h1 align='center'>React, Universally</h1>
  <p align='center'><img width='150' src='https://raw.githubusercontent.com/ctrlplusb/assets/master/logos/react-universally.png' /></p>
  <p align='center'>A starter kit giving you the minimum requirements for a modern universal React application.</p>
</p>

## About

This package is based on the excellent react-universally boilerplate by Sean Matheson and some great contributors. Refer to the package.json for a full list.
It is supposed to be an alternative to create-react-app and next.js.

## Features

  - 👀 `react` as the view.
  - 🔀 `react-router` v4 as the router.
  - 🚄 `express` server.
  - 🎭 `jest` as the test framework.
  - 🖌 Very basic CSS support - it's up to you to extend it with CSS Modules etc.
  - ✂️ Code splitting - easily define code split points in your source using `code-split-component`.
  - 🌍 Server Side Rendering.
  - 😎 Progressive Web Application ready, with offline support, via a Service Worker.
  - 🐘 Long term browser caching of assets with automated cache invalidation.
  - 📦 All source is bundled using Webpack v2.
  - 🚀 Full ES2017+ support - use the exact same JS syntax across the entire project (src/tools/config). No more folder context switching! We also only use syntax that is stage-3 or later in the TC39 process.
  - 🔧 Centralised application configuration with helpers to avoid boilerplate in your code.
  - 🔥 Extreme live development - hot reloading of ALL changes to client/server source, with auto development server restarts when your application configuration changes.  All this with a high level of error tolerance and verbose logging to the console.
  - ⛑ SEO friendly - `react-helmet` provides control of the page title/meta/styles/scripts from within your components.
  - 🤖 Optimised Webpack builds via HappyPack and an auto generated Vendor DLL for smooth development experiences.
  - 🍃 Tree-shaking, courtesy of Webpack.
  - 👮 Security on the `express` server using `helmet` and `hpp`.
  - 🏜 Asset bundling support. e.g. images/fonts.
  - 🎛 Preconfigured to support development and optimised production builds.
  - 👼 Airbnb's ESlint configuration.
  - ❤️ Preconfigured to deploy to `now` with a single command.

Redux/MobX, data persistence, modern styling frameworks and all the other bells and whistles have been explicitly excluded from this starter kit.  It's up to you to decide what technologies you would like to add to your own implementation based upon your own needs.

> However, we now include a set of "feature branches", each implementing a technology on top of the clean master branch.  This provides you with an example on how to integrate said technologies, or use the branches to merge in a configuration that meets your requirements.  See the [`Feature Branches`](/docs/FEATURE_BRANCHES.md) documentation for more.

## Getting started

Create a new folder
```bash
# Create a folder for your new project
mkdir new-project
# cd into the folder
cd new project
# Init a new project to get a package.json file
npm init
# Install universally which will contain the core packages and functionality for your next app
npm install universally --save
# Install universally-dev as devDependency, it will add all that babel/webpack packages that you need during dev
npm install universally-dev --save-dev
# Create an 'app' folder that will contain your universal react application
mkdir app
```

Now you will need to add the following scripts to your package.json file:
```json
"scripts": {
  "dev": "universally dev",
  "build": "universally build",
  "start": "universally start",
  "heroku-postbuild": "npm run build"
}
```

Now create a very basic index.js file in your app folder 
```jsx
import React from 'react';
export default () => {
  return (
    <span>
      Hello World!
    </span>
  )
}
```

To start developing, you can simply
```bash
# Start the dev server
npm run dev
```

To deploy your app
```bash
```
