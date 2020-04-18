// function sendUpdateMessage (text) {
//   // win.webContents.send('message', text);
// }
// ipcMain.on('checkUpdate', () => {
//   // 处理更新操作
//   const returnData = {
//     error: {
//       status: -1,
//       msg: '更新时发生意外，无法进行正常更新！'
//     },
//     checking: {
//       status: 0,
//       msg: '正在检查更新'
//     },
//     updateAva: {
//       status: 1,
//       msg: '正在升级'
//     },
//     updateNotAva: {
//       status: 2,
//       msg: '开始加载程序'
//     }
//   };
//   // 更新连接
//   autoUpdater.setFeedURL('http://ursite.com/release/');
//   // 更新错误事件
//   autoUpdater.on('error', (error) => {
//     sendUpdateMessage(returnData.error);
//   });
//   // 检查事件
//   autoUpdater.on('checking-for-update', () => {
//     sendUpdateMessage(returnData.checking);
//   });
//   // 发现新版本
//   autoUpdater.on('update-available', (info) => {
//     sendUpdateMessage(returnData.updateAva);
//   });
//   // 当前版本为最新版本
//   autoUpdater.on('update-not-available', (info) => {
//     setTimeout(() => {
//       sendUpdateMessage(returnData.updateNotAva);
//     }, 1000);
//   });
//   // 更新下载进度事件
//   autoUpdater.on('download-progress', (progressObj) => {
//     // win.webContents.send('downloadProgress', progressObj);
//   });
//   // 下载完毕
//   autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) => {
//     // 退出并进行安装（这里可以做成让用户确认后再调用）
//     autoUpdater.quitAndInstall();
//   });
//   // 发送请求更新
//   autoUpdater.checkForUpdates();
// });
