'use strict';
const path = require('path');
// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 包括生产和开发的环境配置信息
module.exports = {
  settings: {
    enableESLint: false, // 调试模式是否开启ESLint，默认开启ESLint检测代码格式
    enableESLintFix: false, // 是否自动修正代码格式，默认不自动修正
    enableStyleLint: true, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    resolve: {
      // webpack的resolve配置
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'json'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
        $function: resolve('src/function'),
        $utils: resolve('src/utils'),
      },
    },
    // createDeclaration: true, // 打包时是否创建ts声明文件
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    projectDir: ['src', 'editor'],
    // template: resolve('./editor/index.html'), // dev本地调试时需要html模板
  },
  dev: {
    entry: { // 调试入口（本地编辑器中预览自定义组件入口）
      index: [
        './src/react-widget/index.js',
        './src/react-widget/plugin/info-card-plugin.jsx',
        './src/vue-widget/index.js',
        './src/vue-widget/plugin/info-card-plugin.jsx',
        './src/hello-jquery/hello-jquery.jsx',
        './src/hello-jquery/plugin/hello-jquery-plugin.jsx',
      ],
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    cssSourceMap: false,
    closeHotReload: true, // 是否关闭热更新
  },
  build2lib: {
    entry: {
      // 自定义组件入口文件
      reactInfoCard: './src/react-widget/index.js',
      reactInfoCardPlugin: './src/react-widget/plugin/info-card-plugin.jsx',
      infoCard: './src/vue-widget/index.js',
      infoCardPlugin: './src/vue-widget/plugin/info-card-plugin.jsx',
      helloJquery: './src/hello-jquery/hello-jquery.jsx',
      helloJqueryPlugin: './src/hello-jquery/plugin/hello-jquery-plugin.jsx'
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production', // development / production
    libraryName: 'amisWidget', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('./dist'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    ignoreNodeModules: true, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: true,
  }
};
