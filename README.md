# Create React App

This directory is a brief example of a [Create React App](https://github.com/facebook/create-react-app) site that can be deployed to Second State Isomorphic and rendered on the server-side.

## Deploy Your Own

Deploy your own Create React App project with Second State Isomorphic.

[![Deploy with Second State Isomorphic](https://isomorphic.secondstate.io/deploy-button)](https://isomorphic.secondstate.io/new/clone?repository-url=https://github.com/second-state/create-react-app-ssr-example&preset=create-react-app)

## Test in your localhost

In the project directory, run:

### `yarn build`

Builds the front-end of the app for production to the `build` folder.

### `yarn build-server` or `yarn rollup:build-server`

Builds the back-end of the app to the `server-build` folder.

### `wasmedge --dir .:. wasmedge_quickjs.wasm server-build/index.js`

App will be rendered on the server-side. Open [http://localhost:8002](http://localhost:8002) to view it in your browser.