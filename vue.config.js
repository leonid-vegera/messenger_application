const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  scc: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/styles.scss";'
      }
    }
  }
})
