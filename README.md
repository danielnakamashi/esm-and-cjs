# esm-and-cjs

Package that exports both ESM and CJS types

Inspired by this post [https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html](https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html)

## Steps to test

    cd lib
    pnpm i
    pnpm run build

You can modify the transpiled code in `lib/dist/cjs/index.js` and `lib/dist/mjs/index.js` to differentiate between them like adding a `console.log('cjs')` and `console.log('mjs')`.

Enter `consumer` folder

    cd ../consumer
    pnpm link ../lib
    pnpm i
    pnpm run build:webpack
    node dist/index.js

You should see `mjs` printed on your terminal

Change `module` to `commonjs` in `tsconfig.json`

    pnpm run build:webpack
    node dist/index.js

Now you should see `cjs` printed on your terminal

## Side effects

If you open the output file from consumer, you will notice that when using mjs, we don't add the `sub` function to the final build. But when using cjs, we add everything even if it's not used because cjs doesn't have the capability to define what's being used in build time.
