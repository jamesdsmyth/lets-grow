module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                    presets:['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}
