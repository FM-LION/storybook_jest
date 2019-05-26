//引用path模組
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./bundle/'),
    },
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] } 
                } 
            },
            //第二個loader編譯ES6
            { 
                test: /.js$/, exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] } 
                } 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, '')+'/index.html'
        })
    ],
    //增加一個給devserver的設定
    devServer: {
        port: 9000,
        //publicPath: '/bundle/' //讓產生的 bundle 到 bundle 目錄下(hot產生虛擬bundle.js)
    }
};