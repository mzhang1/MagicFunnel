
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

module.exports = (env) => {
    return {
        entry: {
            app: './src/main.ts'
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