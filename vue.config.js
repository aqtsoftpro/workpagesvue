// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: false,
      },
      // or
      overlay: false,
    },
    proxy: {
      '/api': {
          target: 'https://wpages.aqtdemos.com/api', // Replace with your API base URL
          changeOrigin: true,
          pathRewrite: {
              '^/api': ''
          }
      }
    }

  }
})