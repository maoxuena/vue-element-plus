const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const {
  /* baseURL, */
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  devPort,
} = require('./src/config')

const mockServer = () => {
  if (process.env.NODE_ENV === 'development') {
    return require('./mock/mock-server.js')
  } else {
    return ''
  }
}

module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    // 前端配置代理访问后端的示例
    // proxy: {
    //   [baseURL]: {
    //     target: `http://后端接口地址`,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^/" + baseURL]: "",
    //     },
    //   },
    // },
    after: mockServer()
  },

  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
          '*': resolve(''),
        },
      }
    }
  },
  chainWebpack: config => {
    // vue inspect --rules
    // set svg-sprite-loader
    // 配置svg规则排除icons目录中svg文件处理
    // 目标给svg规则增加一个排除选项exclude:['path/to/icon']
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/assets/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
}