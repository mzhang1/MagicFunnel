
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
    const devMode = !env.prod;
    return {
        entry: {
            app: './src/main.tsx'
        },
        output: {
            filename: 'bundle.js'
        },
        devServer: {
            static: {
                directory: path.join(__dirname, "dist")
            },
            compress: true,
            port: env.port
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
                        { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' }
                    ]
                },
                {
                    test: /\.(woff|otf)?$/i,
                    type: 'asset/resource'
                }
            ]
        },
        mode: devMode ? 'production' : 'development',
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
            }),
            new BundleAnalyzerPlugin(),
            devMode ? () => {} : new MiniCssExtractPlugin()
        ]
    };
};