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
  globals: {
    AFRAME: 'readonly'
  },
  publicPath: process.env.NODE_ENV === "/final-project/"
}  