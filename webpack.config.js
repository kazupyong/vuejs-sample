const path = require('path');
const ExtractTestPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './javascripts/app.js',
    output: {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: ['coffee-loader']
            }
        ]
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    entry: './stylesheets/app.scss',
    output: {
        path: __dirname,
        filename: './public/stylesheets/[name].css'
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: './public/images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
//                loader :  ExtractTestPlugin . extract ( 'style-loader' ,  'css-loader! sass-loader' )
            loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff",
                options: {
                    name: './public/fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                options: {
                    name: './public/fonts/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTestPlugin('[name].css')
    ]
};

