var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: ['babel-polyfill', './client/app/Root.js'],
        style: ['./style/reset.less','./style/main.less', './node_modules/bootstrap/less/bootstrap.less' ],
        vendor: [ 'react', 'material-ui' ]
    },
    output: {
        path: './build',
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/,         loaders: ['react-hot', 'babel-loader']},
            { test: require.resolve("react"),                   loader: "expose?React" },
            { test: /\.json$/,                                  loader: "json" },
            { test: /\.less$/,                                  loader: ExtractTextPlugin.extract("style", "css!postcss!less") },
            { test: /\.(woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,  loader: "file" },
            { test: /\.(svg|eot)(\?v=\d+\.\d+\.\d+)?$/,         loader: "file" },
            { test: /\.(png|jpg)$/,                             loader: 'url'},
            { test: /\.yaml/,                                   loader: 'yaml'},
            { test: /node_modules\/auth0-lock\/.*\.js$/,        loaders: ['transform-loader/cacheable?brfs', 'transform-loader/cacheable?packageify'] },
            { test: /node_modules\/auth0-lock\/.*\.ejs$/,       loader: 'transform-loader/cacheable?ejsify' }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['Explorer >= 10', 'Safari >= 7', 'Firefox >= 32', 'Chrome >= 36', 'last 2 version'] })
    ],
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            template: 'assets/index-template.html'
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify("0.2"),
            DEV: true
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modulesDirectories: [ "lib", "node_modules" ],
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
