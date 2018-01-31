const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ['./js/main.js', './css/styles.css'],
	output: { path: path.resolve(__dirname, 'build'), filename: 'scripts.js' },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({ 
                        fallback:'style-loader',
                        use:['css-loader','postcss-loader']})
            }
        ]
    },
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
}