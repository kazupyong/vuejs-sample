var path = require('path');

module.exports = {
    entry: './javascript/app.js',
    output: {
        path: __dirname,
        filename: './public/javascript/bundle.js'
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
    }
};

