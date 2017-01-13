const path = require('path');
module.exports = (config) => {
  config.bundles.client.srcEntryFile = path.resolve(__dirname, 'universally', 'client.js');
  config.bundles.client.srcPaths.push(path.resolve(__dirname, 'universally'));
  config.bundles.server.srcEntryFile = path.resolve(__dirname, 'universally', 'server.js');
  config.bundles.server.srcPaths.push(path.resolve(__dirname, 'universally'));
  return config;
};
