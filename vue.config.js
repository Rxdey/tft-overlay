module.exports = {
  publicPath: './',
  productionSourceMap: false,
  // transpileDependencies: ['node_modules'],
  // filenameHashing: false,
  devServer: {
    disableHostCheck: true
  },
  // css: {
  //   extract: false,
  //   sourceMap: false
  // }
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.tftoverlay.app',
        productName: 'TFT-overlay',
        nsis: {
          oneClick: false, // 是否一键安装
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          createDesktopShortcut: true // 创建桌面图标
        },
        win: {
          publish: [
            {
              provider: 'generic',
              url: '' // 更新服务器地址,可为空
            }
          ]
        }
      }
    }
  }
};
