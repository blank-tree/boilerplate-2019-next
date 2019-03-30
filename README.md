# Boilerplate: TypeScript, React, Next.js, Sass

Currently basend on the next with apollo example

## How to start

Clone it and run:

```bash
npm install
npm run dev
```
	
## How to use

```
.
├── api                  // put all your microservices separately in directories here
│   ├── [...]
├── components           // all your reusable components to be combined on your pages
│   ├── App.tsx          // populate every app
│   ├── Header.tsx       // populate every header
│   ├── [...]
├── node_modules         // all dependencies
│   ├── [...]
├── pages                // all your routes and pages
│   ├── _app.tsx         // wrapper around every page with ApolloClient
│   ├── _document.tsx    // static server side renderer wrapper around the entire page. not dynamic!
│   ├── index.js         // starting point '/'
│   ├── [...]
├── static               // all static elements like fonts, favicons, logos etc...
│   ├── favicon.ico
│   ├── [...]
├── styles
│   ├── _variables.scss  // all global styling variables. import this in every scss-file first
│   ├── style.scss       // main styling scss-file. import fundamentals here
│   ├── [...]
├── .babelrc.js          // babel configuration for TypeScript
├── .gitignore           // ignore everything that doesn't need to be part of the git-repo
├── next.config.js       // register Typescript and Sass
├── package.json         // register all your dependencies
└── tsconfig.md          // configuration for TypeScript
```

## The idea behind the example

### Apollo

[Apollo](https://www.apollographql.com/client/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server.

In this simple example, we integrate Apollo seamlessly with Next by wrapping our *pages/_app.js* inside a [higher-order component (HOC)](https://facebook.github.io/react/docs/higher-order-components.html). Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application.

On initial page load, while on the server and inside `getInitialProps`, we invoke the Apollo method,  [`getDataFromTree`](https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree). This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized.

This example relies on [graph.cool](https://www.graph.cool) for its GraphQL backend.


Note: Do not be alarmed that you see two renders being executed.  Apollo recursively traverses the React render tree looking for Apollo query components. When it has done that, it fetches all these queries and then passes the result to a cache. This cache is then used to render the data on the server side (another React render).
https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree

### TypeScript

Use the [@zeit/next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript) plugin to inject [@babel/preset-typescript](https://github.com/babel/babel/tree/master/packages/babel-preset-typescript) into Next.js, allowing for fast TypeScript transpilation. It also implements a `tsconfig.json` as recommended by [the @zeit/next-typescript plugin page](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript/#readme).

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this in your `test` scripts, say, for your CI process.

### sass

This example uses next-sass without css-modules. The config can be found in `next.config.js`, change `withSass()` to `withSass({cssModules: true})` if you use css-modules. Then in the code, you import the stylesheet as `import style from '../styles/style.scss'` and use it like `<div className={style.example}>`.

[Learn more](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)

## Based on

[Zeit next.js example with-apollo](https://github.com/zeit/next.js/tree/canary/examples/with-apollo)

[Zeit next.js example with-typescript](https://github.com/zeit/next.js/tree/canary/examples/with-typescript)

[Zeit next.js example with-next-sass](https://github.com/zeit/next.js/tree/canary/examples/with-next-sass)