module.exports = {
    plugins: [
        require('postcss-import')({
            plugins: [
                require('postcss-responsive-properties')
            ],
        }),
        require('precss'),
        require('autoprefixer'),
        require('lost')
    ]
}