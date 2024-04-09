// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('a-')
        }
        return options
      })
  },
  publicPath: process.env.NODE_ENV === "production" ? "/final-project/" : "/",
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // }
}