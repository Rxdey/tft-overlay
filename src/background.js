import { app, protocol, BrowserWindow, ipcMain } from 'electron';
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib';
import model from './electron/requestData';
import createChilldWindow from './electron/childWindow';
import CreateTrayMenu from './electron/menu';

const isDevelopment = process.env.NODE_ENV !== 'production';

let win;
let childWin;

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }]);

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 95,
    x: 0,
    y: 0,
    frame: false,
    transparent: true,
    resizable: false, // 改变大小
    maximizable: false,
    alwaysOnTop: true, // 置顶
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    // if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol('app');
    win.loadURL('app://./index.html');
  }

  win.on('closed', () => {
    win = null;
  });
}

/**
 * 获取数据
 * @param {String} name 数据名字
 */
ipcMain.on('async-getdata', async (event, arg) => {
  if (!(arg in model)) {
    event.returnValue = 0;
    return;
  }
  try {
    const res = await model[arg]();
    event.returnValue = res;
  } catch (error) {
    event.returnValue = 0;
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools();
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString());
    // }
  }
  createWindow();
  childWin = createChilldWindow(win);
  CreateTrayMenu(win);
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}
// 鼠标经过
ipcMain.on('mouse-over', (e, item) => {
  if (!childWin) {
    childWin = createChilldWindow();
  }
  childWin.showInactive();
  childWin.webContents.send('mouse-over', item);
});
ipcMain.on('mouse-out', (e) => {
  if (!childWin) {
    childWin = createChilldWindow();
  }
  childWin.webContents.send('mouse-out');
  childWin.hide();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 全屏监听不到啊，就一直置顶吧 没啥问题
setInterval(() => {
  if (!win) return;
  win.moveTop();
}, 3000);
