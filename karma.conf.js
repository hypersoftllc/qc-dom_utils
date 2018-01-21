const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'src/__tests__/**/*.js',
    ],
    preprocessors: {
      'src/__tests__/**/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'IE', 'PhantomJS'],
    frameworks: ['mocha', 'chai'],
    client: {
      mocha: {
      // Setting `reporter` to `'html'` changes Karma's debug.html to the mocha web
      // reporter.  Karma's debug.html can be seen by clicking the `DEBUG` button in
      // the browser(s) Karma opened.
        reporter: 'html',
      },
    },
    // Level of logging:
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
    //   config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
  })
}
