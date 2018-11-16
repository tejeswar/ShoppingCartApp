console.log("webpack started");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//console.log(path);
console.log(__dirname);
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js'
      },
      module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ],
                exclude: /node_modules/
            },
          //https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a
          //{ test: /\.scss$/,use:['style-loader','css-loader',"sass-loader"] }//Here loader order is important if u alter it will fail
          { test: /\.css$/,use:['style-loader','css-loader'] },
         { test: /\.(png|jpg|svg)$/,  
          use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'img/',
                publicPath: 'img/'
            }
        }]
         }/*,
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
      }*/
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
  };