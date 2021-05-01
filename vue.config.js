// let TransformModulesPlugin = require('webpack-transform-modules-plugin')
const path = require("path");
module.exports = {
    //配置根目录
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',//构建输出目录
    assetsDir: "assets", //静态资源目录（js,css,image）
    lintOnSave: false, //false不开启，有效值：true || false
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存 */
    filenameHashing: false,
    chainWebpack: config => {
        // 移除 prefetch 插件
        ["index", "mobdev"].forEach(entryName => {
            config.plugins.delete(`prefetch-${entryName}`);
            config.plugins.delete(`preload-${entryName}`);
        });
    },
    // css相关配置
    css: {
        sourceMap: true,
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // loaderOptions: {
        //     css: {},
        //     postcss: {
        //         plugins: [
        //             require("postcss-px2rem")({
        //                 remUnit: 192///设计图宽度/10
        //             })
        //         ]
        //     }
        // }
    },
    configureWebpack: {
        // devtool:"source-map",    //显示源代码方便debug调试
        resolve: {
            // 配置解析别名
            alias: {
                "@api": path.resolve(__dirname, "./src/server"),
            }
        },
        output: {
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            // filename: 'js/[name].js?v=' + Version,
            // chunkFilename: 'js/[name].js?v=' + Version
            filename: "js/[name].js",
            chunkFilename: "js/[name].js"
        }
        // plugins: [
        //     new TransformModulesPlugin()
        // ]
    },
    devServer: {
        open: true, //是否启动打开浏览器
        host: "0.0.0.0",//主机，0.0.0.0支持局域网地址，可以用真机测试
        port: 8888, //端口
        https: false,//是否启动https
        //配置跨域代理
        proxy: {
            "/api": {
                target: "https://tb3.jkcrm.cn",
                changeOrigin: true,//支持跨域
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    }
};
