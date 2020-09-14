const less = require('@remax/plugin-less')
const path = require('path')
module.exports = {
    // 配置项目路径，默认当前路径
    cwd: process.cwd(),
    // 是否显示 build 进度，默认显示
    progress: true,
    // 指定代码的根目录，默认 src
    rootDir: 'src',
    // build 目录，默认 dist
    output: 'dist',

    // 是否开启 wxml/axml 文件压缩
    compressTemplate: process.env.NODE_ENV === 'production',
    // 是否将 px 转换为 rpx, 默认是 true
    pxToRpx: false,
    plugins: [
        less()
    ],

    configWebpack({ config, webpack, addCSSRule }) {
        // config 是的 https://github.com/neutrinojs/webpack-chain Config 对象。
        // config.plugins.delete('webpackbar'); // 去掉进度条

        // 配置别名
        config.resolve.alias
            .merge({
                '@': path.resolve(__dirname, 'src'),
                '@public': path.resolve(__dirname, 'public'),
            })
            .end()
        // 删掉默认的 module rules
        // https://github.com/remaxjs/remax/blob/7c7e065b315d82e765a8e015a13f2ae54b2ff49a/packages/remax-cli/src/build/webpack/config.mini.ts#L159-L169
        config.module.rules.delete('image')
        config.module.rules.delete('font')
        config.module
            .rule('css-svg')
            .test(/\.svg$/i)
            .issuer({
                test: /\.(css|less)$/
            })
            .use('file-loader')
            .loader('file-loader')
            .options({
                publicPath: '/images/',
                outputPath: '/images/',
                name: '[name].[hash].[ext]',
                esModule: false
            })
            .end()
            .use('svgo-loader')
            .loader('svgo-loader')
        config.module
            .rule('js-img')
            .test(/\.(png|jpe?g|gif)$/i)
            .issuer({
                test: /\.(js|ts)x?$/
            })
            .use('file-loader')
            .loader('file-loader')
            .options({
                publicPath: '/images/',
                outputPath: '/images/',
                name: '[name].[hash].[ext]',
                esModule: false
            })
        // 引用 wxss
        addCSSRule({
            name: 'wxss',
            test: /\.wxss(\?.*) ? $ /,
        });
    },
};