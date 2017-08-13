var path = require('path');
var webpack = require('webpack');

const PATH = {
    src: path.join(__dirname, 'js'),
    build: path.join(__dirname, 'js')
};

module.exports = {
    entry: path.join(PATH.src, 'app.js'),
    output: {
        path: PATH.build,
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|components)/
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '.',
        hot: true,
        inline: true,
        historyApiFallback: true
    }
};