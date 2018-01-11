# Create Nitro App

The easiest way to create a [React](https://facebook.github.io/react) app with server-side rendering thanks to [Next.js](https://github.com/zeit/next.js)
with the modules below :

* [Material-UI](http://www.material-ui.com/) - React components that implement Google's Material Design
* [Styled-Components](https://www.styled-components.com/) - Visual primitives for the component age.
* [Flow](https://flow.org/) - A Static type checker for javascript

- [Getting Started](#getting-started) — How to create an app

If you run into any issues or have feedback, please [file an issue](https://github.com/williamluke4/create-nitro-app/issues/new)

## Overview

```sh
npm install -g create-nitro-app

create-nitro-app my-app
cd my-app/
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your running app.
When you're ready for production, run `npm run build` then `npm run start`.

<img width="600" alt="Create Nitro App running in terminal" src="https://cloud.githubusercontent.com/assets/1026125/25556236/0ac91ca6-2cae-11e7-87ae-bb7974285063.png" />

<img width="600" alt="Create Nitro App running in terminal" src="https://cloud.githubusercontent.com/assets/1026125/25556240/111fc3b6-2cae-11e7-84b6-961de4fd27f9.png" />

### Start Coding Now

You **don't** need to install or setup Webpack or Babel.
They come packaged with `nitro`, so you can just start coding.

After running `create-nitro-app`, you're good to go!

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g flow, flow-typed, create-nitro-app
```

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#usage) to easily switch Node versions between different projects.

**You don't need to use Node as your primary backend**. The Node installation is only required for Create Nitro App and running the Nitro.js server in development/production.

### Creating an App

To create a new app, run:

```
create-nitro-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install necessary dependencies:

```
my-app/
  flow-typed
  node_modules
  pages
  static
  types
  .babelrc
  .flowconfig
  .gitignore
  next.config.js
  package.json
  postcss.config.js
  README.md
  yarn-error.log
  yarn.lock
```




Routing in Nitro.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `nitro` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`

Once the installation is finished, you can run some commands in your project:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `.nitro` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` or `yarn start`

Starts the application in production mode.
The application should be compiled with \`npm run build\` first.

Now you're ready to code & deploy your app!



## Acknowledgements

We are grateful to the authors of existing related projects for their ideas as inspiration:

* [Create Next App](https://github.com/segmentio/create-next-app)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Next.js](https://github.com/zeit/nitro.js)
* [@eanplatter](https://github.com/eanplatter)
* [@insin](https://github.com/insin)
* [@mxstbr](https://github.com/mxstbr)

Looking for alternatives? Here are some other project starter kits:

* [Create React App](https://github.com/facebookincubator/create-react-app)
* [insin/nwb](https://github.com/insin/nwb)
* [mozilla-neutrino/neutrino-dev](https://github.com/mozilla-neutrino/neutrino-dev)
* [NYTimes/kyt](https://github.com/NYTimes/kyt)
* [gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby)
* [enclave](https://github.com/eanplatter/enclave)
* [motion](https://github.com/motion/motion)
* [quik](https://github.com/satya164/quik)
* [sagui](https://github.com/saguijs/sagui)
* [roc](https://github.com/rocjs/roc)
* [aik](https://github.com/d4rkr00t/aik)
* [react-app](https://github.com/kriasoft/react-app)
* [dev-toolkit](https://github.com/stoikerty/dev-toolkit)
* [tarec](https://github.com/geowarin/tarec)
* [sku](https://github.com/seek-oss/sku)


Questions? Feedback? [Please let us know](https://github.com/williamluke4/create-nitro-app/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
Copyright (c) 2017-present Atto-Byte, Inc. william@atto-byte.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
