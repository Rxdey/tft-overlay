import { Menu, Tray } from 'electron'; // eslint-disable-line
import { autoUpdater } from 'electron-updater';

const path = require('path');

const downloading = false;
const checkUpdate = (appTray, cb = () => { }) => {
  autoUpdater.setFeedURL('http://127.0.0.1:8054/download/');
  // 处理更新操作
  const sendUpdateMessage = (message) => {
    appTray.displayBalloon({
      title: 'TFT-overlay',
      content: message.msg || '',
      noSound: true,
      largeIcon: false
    });
  };
  const returnData = {
    error: {
      status: -1,
      msg: '更新时发生意外，无法进行正常更新！'
    },
    checking: {
      status: 0,
      msg: '正在检查更新'
    },
    updateAva: {
      status: 1,
      msg: '正在升级'
    },
    updateNotAva: {
      status: 2,
      msg: '开始加载程序'
    },
    download: {
      status: 2,
      msg: '正在下载...'
    }
  };
  autoUpdater.on('error', (error) => {
    sendUpdateMessage(returnData.error);
    cb();
  });
  // 检查事件
  autoUpdater.on('checking-for-update', () => {
    sendUpdateMessage(returnData.checking);
  });
  // 发现新版本
  autoUpdater.on('update-available', (info) => {
    sendUpdateMessage(returnData.updateAva);
  });
  // 当前版本为最新版本
  autoUpdater.on('update-not-available', (info) => {
    sendUpdateMessage(returnData.updateNotAva);
  });
  // 更新下载进度事件
  // autoUpdater.on('download-progress', (progressObj) => {
  //   sendUpdateMessage(returnData.download);
  // });
  // 下载完毕
  autoUpdater.on('update-downloaded', () => {
    // 退出并进行安装（这里可以做成让用户确认后再调用）
    autoUpdater.quitAndInstall();
    cb();
  });
  // 发送请求更新
  autoUpdater.checkForUpdates();
};

let appTray = null;
export const trayMenu = (mainWindow, cb) => {
  // 系统托盘图标目录
  // eslint-disable-next-line no-undef
  const trayIcon = path.join(__static, 'icon.ico');
  appTray = new Tray(trayIcon);
  const trayMenuTemplate = [
    // {
    //   label: '检查更新',
    //   click: () => {
    //     if (downloading) return;
    //     downloading = true;
    //     try {
    //       checkUpdate(appTray, () => {
    //         downloading = false;
    //       });
    //     } catch (error) {
    //       downloading = false;
    //     }
    //   }
    // },
    {
      label: '退出',
      click: () => {
        // app.quit();
        mainWindow.close();
      }
    }
  ];
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
  appTray.setToolTip('tft-overlay');
  appTray.setContextMenu(contextMenu);
  appTray.on('click', () => {
    mainWindow.show();
  });
};
export default trayMenu;
