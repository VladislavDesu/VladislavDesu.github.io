"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
   entry: {
      index: ["./src/scripts/removeLoader.js", "./src/scripts/parallax.js", "./src/scripts/no-js.js", "./src/scripts/menu.js", "./src/scripts/createPortfolioCards.js", "./src/scripts/btn-up.js"],
   },

   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'docs/scripts'),
   },

   plugins: [
      new webpack.ProvidePlugin({
         $: "node_modules/jquery/dist/jquery.min.js",
         jQuery: "node_modules/jquery/dist/jquery.min.js",
         "window.jQuery": "node_modules/jquery/dist/jquery.min.js",
         Parallax: "node_modules/parallax-js/dist/parallax.min.js"
      }),
   ],

   devtool: "inline-source-map"
};