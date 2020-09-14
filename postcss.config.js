// postcss.config.js
module.exports = ({ options }) => ({
    plugins: {
        // 继承 remax 默认的插件配置
        ...options.plugins,
        // 添加其他插件
        'postcss-url': { url: 'inline', maxSize: 15 },
    },
});
