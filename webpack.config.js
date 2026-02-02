
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

module.exports = (env) => {
    return {
        entry: {
            app: './src/main.ts'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        mode: env.mode,
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
        }

    };
};