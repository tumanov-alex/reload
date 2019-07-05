module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js",
		publicPath: "/static/"
	},

	devtool: "cheap-module-eval-source-map",
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel",
			include: __dirname,
			query: {
				presets: [ "react-hmre", "es2017" ]
			}
		}]
	}
}
