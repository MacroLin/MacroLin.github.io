const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./css/[name]_css.css');
const extractLESS = new ExtractTextPlugin('./css/[name]_less.css');

var config = {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, '/public/dist/'),
        filename: '[name].js',
        publicPath: '/public/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }],
        }, {
            test: /\.css$/,
            use: extractCSS.extract(['css-loader', 'postcss-loader','autoprefixer-loader'])
        }, {
            test: /\.less$/,
            use: extractLESS.extract(['css-loader', 'less-loader','autoprefixer-loader'])
        }, {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'image&fonts/[hash:8]/asset/[name].[ext]'
                }
            }]
        }]

    },
    plugins: [
        extractCSS,
        extractLESS,
        new webpack.optimize.CommonsChunkPlugin('vendor.bundle'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
}
var files = glob.sync('./src/js/*/index.js');
var newEntries = files.reduce(function(acc, val) {
    var name = /.*\/(.*?)\/index\.js/.exec(val)[1];
    acc[name] = entry(name);
    return acc;
}, {});

function entry(name) {
    return './src/js/' + name + '/index.js';
}
config.entry = Object.assign({}, config.entry, newEntries);
module.exports = config;
