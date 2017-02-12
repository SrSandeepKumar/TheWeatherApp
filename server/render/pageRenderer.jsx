import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import { createAppScript, createTrackingScript } from './createScripts';

const createApp = (store, props) => renderToString(
  <Provider store={store}>
      <RouterContext {...props} />
  </Provider>
);

const buildPage = ({ componentHTML, initialState, headAssets }) => {
  return `
<!doctype html>
<html>
  <head>
  <link rel="manifest" href="/manifest.json">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="application-name" content="Weather">
  <meta name="apple-mobile-web-app-title" content="Weather">
  <meta name="theme-color" content="#47CFCA">
  <meta name="msapplication-navbutton-color" content="#47CFCA">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="msapplication-starturl" content="/">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/png" sizes="192*192" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893392/weather192_offlpk.png">
  <link rel="apple-touch-icon" type="image/png" sizes="192*192" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893392/weather192_offlpk.png">
  <link rel="icon" type="image/png" sizes="144*144" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893391/weather144_pc5lh9.png">
  <link rel="apple-touch-icon" type="image/png" sizes="144*144" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893391/weather144_pc5lh9.png">
  <link rel="icon" type="image/png" sizes="96*96" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893390/weather96_nkppkk.png">
  <link rel="apple-touch-icon" type="image/png" sizes="96*96" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893390/weather96_nkppkk.png">
  <link rel="icon" type="image/png" sizes="72*72" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893388/weather72_tpwojy.png">
  <link rel="apple-touch-icon" type="image/png" sizes="72*72" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893388/weather72_tpwojy.png">
  <link rel="icon" type="image/png" sizes="46*46" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893387/weather46_oedrsy.png">
  <link rel="apple-touch-icon" type="image/png" sizes="46*46" href="https://res.cloudinary.com/djgnze1er/image/upload/v1486893387/weather46_oedrsy.png">
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    ${createTrackingScript()}
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    ${createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  const headAssets = Helmet.rewind();
  return buildPage({ componentHTML, initialState, headAssets });
};
