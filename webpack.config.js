const path = require('path')

module.exports = {
    entry:path.resolve(__dirname,'src','index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                include:path.resolve(__dirname,'src'),
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env', {
                                'targets':"defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
                test:/\.css$/i,
                include:path.resolve(__dirname,'src'),
                use:['style-loader','css-loader','postcss-loader'],
            }
        ]
    }
}