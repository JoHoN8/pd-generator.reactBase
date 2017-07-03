const   path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, "./dist/scripts"),
    },
    module:{
        rules:[
            {  
                test: /\.js$|\.jsx$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                             [['es2015', {modules: false}], 'react', 'stage-0']
                        ]
                    }
                }
            }
        ]
    },
    plugins: [],
    externals: {}
    //devtool: 'source-map'
};

