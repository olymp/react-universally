export default config => ({
  ...config,
  bundlesSharedSrcPath: './app',
  port: process.env.PORT || 3010,
  clientDevServerPort: process.env.PORT ? process.env.PORT + 1 : 3011,
  happypackOutputPath: './build/happypack',
  buildOutputPath: './.build',
  bundles: {
    ...config.bundles,
    client: {
      ...config.bundles.client,
      outputPath: './.build/client',
    },
    server: {
      ...config.bundles.server,
      outputPath: './.build/server',
    },
  },
});
