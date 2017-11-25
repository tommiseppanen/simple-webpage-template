const path = require('path');

module.exports = {
	entry: ['./js/main.js', './css/styles.css'],
	output: { path: path.resolve(__dirname, 'build'), filename: 'scripts.js' },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    }
}