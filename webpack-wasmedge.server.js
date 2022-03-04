const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './server/wasmedge.js',
	externals: [
		// nodeExternals(),
		{"process": "process"},
		{"wasi_http": "wasi_http"},
		{"wasi_net": "wasi_net"}
	],
	output: {
		path: path.resolve('server-build'),
		filename: 'index.js',
		chunkFormat: "module",
		library: {
			type: "module"
		},
	},
	experiments: {
		outputModule: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ["css-loader"]
			},
			{
				test: /\.svg$/,
				use: ["svg-url-loader"]
			}
		]
	}
};
