module.exports = {
	entry: './src/blocks/hero-block/index.js',
	output: {
		path: __dirname,
		filename: 'dist/blocks.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
