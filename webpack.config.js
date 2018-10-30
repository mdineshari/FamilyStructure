const path = require('path');


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
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
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
      }
}