const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // TODO: Add HtmlWebpackPlugin configurations
      new HtmlWebpackPlugin({
        template: './index.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'install.html',
        chunks: ['install'],
      }),
      
      // TODO: Add WebpackPwaManifest configuration
      new WebpackPwaManifest({
        name: 'Text Editor',
        short_name: 'Text Editor',
        start_url: '.',
        display: 'standalone',
        background_color: '#272822',
        icons: [
          {
            src: path.resolve('assets/icons/icon_96x96.97a96e0fc4eb2a8bec3b8d49d90f1d14.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      
      // TODO: Add InjectManifest configuration
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, 'src/css'),
        },
      ],
      
    },
  };
};
