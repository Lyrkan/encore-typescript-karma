// Generate Encore runtimeConfig
const context = require('@symfony/webpack-encore/lib/context');
const parseRuntime = require('@symfony/webpack-encore/lib/config/parse-runtime');
const ManifestPlugin = require('@symfony/webpack-encore/lib/webpack/webpack-manifest-plugin');

const encoreArgs = ['dev-server'];
context.runtimeConfig = parseRuntime(
  require('yargs').parse(encoreArgs),
  process.cwd()
);

// Retrieve webpack config
const webpackConfig = require('./webpack.config');

// Set writeToFileEmit option of the ManifestPlugin to false
for (const plugin of webpackConfig.plugins) {
  if ((plugin instanceof ManifestPlugin) && plugin.opts) {
    plugin.opts.writeToFileEmit = false;
  }
}

// Remove entry property (handled by Karma)
delete webpackConfig.entry;

// Karma options
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'test/index.ts'
    ],

    preprocessors: {
      'test/index.ts': ['webpack']
    },

    browsers: ['PhantomJS'],

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true,
    },

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ],

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    reporters: ['spec']
  });
};
