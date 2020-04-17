// 1^ ДОБАВИТЬ --no-clean  К БИЛДУ, иначе всё снесёт нахер

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 100,
        maxSize: 290000
      },
    }
  }
