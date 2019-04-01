'use strict';

const autoprefixer = require('autoprefixer');
const colorFunction = require('postcss-color-function');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const easyImport = require('postcss-easy-import');

const postcssOptions = {
  compile: {
    enable: true,
    plugins: [
      { module: easyImport },
      { module: customProperties, options: { preserve: false } },
      { module: colorFunction },
      { module: autoprefixer, options: { browsers: ['last 2 versions'] } },
      { module: cssnano },
    ]
  }
};

module.exports = {
  name: require('./package').name,

  included(app) {
    app.options.postcssOptions = postcssOptions;

    this._super.included.apply(this, arguments)
  },
};
