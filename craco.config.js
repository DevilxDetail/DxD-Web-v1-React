const path = require('path');

module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
  webpack: {
    alias: {
      'typescript': path.resolve(__dirname, 'node_modules/typescript'),
    },
    configure: (webpackConfig) => {
      // Force webpack to resolve typescript to our version
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.alias = webpackConfig.resolve.alias || {};
      webpackConfig.resolve.alias.typescript = path.resolve(__dirname, 'node_modules/typescript');
      
      return webpackConfig;
    }
  }
};