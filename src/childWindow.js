import { protocol, BrowserWindow } from 'electron';
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib';
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
]);
const createChilldWindow = parentWin => {
  let childWin = new BrowserWindow({
    parent: parentWin,
    frame: false,
    transparent: true,
    // resizable: false,
    width: 800,
    height: 900,
    maximizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // childWin.webContents.openDevTools();
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    childWin.loadURL('http://localhost:8080/#/child');
    // if (!process.env.IS_TEST) childWin.webContents.openDevTools();
  } else {
    createProtocol('app');
    childWin.loadURL('app://./index.html#/child');
  }
  childWin.on('closed', () => {
    childWin = null;
  });
  return childWin;
};

export default createChilldWindow;
