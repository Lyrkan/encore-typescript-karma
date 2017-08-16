// webpack.config.js
const Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    .setOutputPath('build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as build/main.js
    .addEntry('main', './src/index.ts')

    // enable ts-loader
    .enableTypeScriptLoader()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
