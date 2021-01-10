// Karma configuration
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "browserify"],
    files: ["**/*test.*.js"],
    exclude: ["node_modules"],
    preprocessors: {
      "**/*test.*.js": ["browserify"],
    },
    plugins: [
      require("karma-browserify"),
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-spec-reporter"),
      require("karma-jasmine-html-reporter"),
    ],
    // browserify: {
    //   debug: true,
    //   transform: [["babelify", { presets: ["es2015"] }]],
    // },
    reporters: ["spec", "kjhtml"],
    port: 9876,
    colors: true,

    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    browsers: ["Chrome"],
    client: {
      clearContext: false,
    },

    singleRun: false,
    concurrency: Infinity,
  });
};
