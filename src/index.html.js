/* 
  We are using a simple templating feature from ES6 to allow for really simple dynamic content. 
  For more information about this feature check out :
  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals

  If you want to use a normal html file without template you could create an index.html 
  file and then modify the webpack.config.js file and point the HtmlWebpackPlugin file reference
  to the new file.
 */

const title = 'Page Title';
const message = 'Hello Everyone!';
const logo = require('./images/webpack-logo.png')

const html = `
  <!doctype html>
  <html class="no-js" lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>${title}</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="apple-touch-icon" href="apple-touch-icon.png">       
    </head>
    <body>
      ${message}
      <img src="${logo}" width="500"/>
      <img src="${require('./images/logo.svg')}" width="500"/>
      <div id="main"></div>
    </body>
  </html>
`;

/* Webpack requires us to export a function */
module.exports = () => html;
