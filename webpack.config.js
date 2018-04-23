module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3000
	},
	build: {
	    assetsPublicPath: '/',
	    assetsSubDirectory: 'assets'
	},
	module: {
		rules: [
			{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: require.resolve('react'),
			use: {
				presets: ['es2015', 'react'],
				name: [name][md5:hash].[ext],
				assets: path.resolve('./app/assets')
			}
		}
	],
	loaders: [
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }
  ]	
	}
}