module.exports = (config) => {
  const prevConf = config.plugins.webpackConfig;
  config.plugins.webpackConfig = (webpackConfig, buildOptions, config, utils) => {
    const { merge, happyPackPlugin, resolve, ExtractTextPlugin } = utils;
    const { target, mode } = buildOptions;

    if (prevConf) webpackConfig = prevConf(webpackConfig, buildOptions, config, utils);
    if (mode === 'development' && target === 'client') {
      webpackConfig.plugins.push(happyPackPlugin({
        name: 'happypack-devclient-less',
        tempDir: resolve(config.happypackOutputPath),
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            path: require.resolve('less-loader'),
            query: { sourceMap: true },
          },
        ],
      }));
    }
    webpackConfig.module.rules.push(merge(
      {
        test: /\.less$/,
      },
      // For development clients we will defer all our css processing to the
      // happypack plugin named "happypack-devclient-css".
      // See the respective plugin within the plugins section for full
      // details on what loader is being implemented.
      target === 'client' && mode === 'development' && {
        loaders: [`${require.resolve('happypack/loader')}?id=happypack-devclient-less`],
      },
      // For a production client build we use the ExtractTextPlugin which
      // will extract our CSS into CSS files. We don't use happypack here
      // as there are some edge cases where it fails when used within
      // an ExtractTextPlugin instance.
      // Note: The ExtractTextPlugin needs to be registered within the
      // plugins section too.
      target === 'client' && mode === 'production' && {
        loader: ExtractTextPlugin.extract({
          fallbackLoader: require.resolve('style-loader'),
          loader: [`${require.resolve('css-loader')}!${require.resolve('less-loader')}`],
        }),
      },
      // When targetting the server we use the "/locals" version of the
      // css loader, as we don't need any css files for the server.
      target !== 'client' && {
        loaders: [require.resolve('empty-loader')],
      }
    ));
    console.log(target, mode, webpackConfig.module.rules);
    return webpackConfig;
  };
  return config;
};
