var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
   	entry: './public/app/js/index.js',
  	watch: true,
   	output: {
      	path: __dirname + '/public/dist/js/',
	    filename: '[name]-bundle.js',
	    publicPath: '/dist/js/'
   	},
    mode: 'production',
  	module: {
      	rules: [
         	{
	            test: /\.jsx?$/,
	            exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }
         	}
      	]
   	},
   	plugins: [
      	new UglifyJSPlugin({
        	sourceMap: true
      	}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}
module.exports = config;