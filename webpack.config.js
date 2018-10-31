const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src/public/js/index.js'),
    output: {
        path: path.resolve(__dirname,'dist/public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js||jsx)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname,'src/public/js'),
            use: {
              loader: "babel-loader"
            }
          },
          {
            test:/\.css$/,
            use:['file-loader','style-loader','css-loader']
          },
          {
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: '../images/',
                    name:'[name][hash].[ext]', 
                }
            }
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:path.resolve(__dirname,'src/public/vendor'),to:path.resolve(__dirname,'dist/public/vendor')},
        ])
    ]
}