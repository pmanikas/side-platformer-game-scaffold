# Vanilla JavaScript Webpack 5 Setup

This is a well organised webpack 5 setup that includes babel, (s)css support, public folder with static assets and many more.

## Notes

- Whatever is inside the **public** folder, will be copied to the dist folder. You can place your static files there.
- You can use **.css**, **.sass** or **.scss** files and they will work perfectly fine. Note that main style must be included inside **index.js**. In current example, ***style.scss** has been used.
- You don't have to include the js bundle files inside ***index.html**. Webpack already does that for you.

## Get Started

``` bash
npm install
```

or if you prefer yarn

``` bash
yarn install
```

## Build

``` bash
npm run build
```

or if you prefer yarn

``` bash
yarn build
```

## Build with development flag

``` bash
npm run build-dev
```

or if you prefer yarn

``` bash
yarn build-dev
```

## Hot Reload Development

``` bash
npm run start
```

or if you prefer yarn

``` bash
yarn start
```
