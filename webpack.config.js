
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

module.exports = (env) => {
    return {
        entry: {
            app: './src/main.tsx'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css?$/i,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader', options: { url: false } },
                        { loader: 'postcss-loader' }
                    ]
                }
            ]
        },
        mode: env.prod ? 'production' : 'development',
        watchOptions: {
            ignored: [
                '**/dist/**',
                '**/test/**'
            ]
        },
        resolve: {
            extensions: ['.tsx','.ts','.jsx','.js'],
            alias: {
                '@': path.resolve(__dirname, './src')
            } 
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    };
};