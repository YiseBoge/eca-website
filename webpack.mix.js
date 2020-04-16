const path = require('path');
const fs = require('fs-extra');
const mix = require('laravel-mix');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
  .js('resources/js/app.js', 'public/dist/js')
  .js('resources/js/dashboard.js', 'public/dist/js')
  .sass('resources/sass/app.scss', 'public/dist/css')

  .disableNotifications();

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js')
    }
  },
  output: {
    chunkFilename: 'dist/js/[chunkhash].js',
    path: mix.config.hmr ? '/' : path.resolve(__dirname, './public/build')
  }
});

mix.then(() => {
  if (!mix.config.hmr) {
    process.nextTick(() => publishAssets())
  }
});

function publishAssets() {
  const publicDir = path.resolve(__dirname, './public');

  fs.removeSync(path.join(publicDir, 'dist'));
  fs.copySync(path.join(publicDir, 'build', 'dist'), path.join(publicDir, 'dist'));
  fs.removeSync(path.join(publicDir, 'build'))
}
