import { Menu, Tray } from 'electron'; // eslint-disable-line
const path = require('path');

let appTray = null;
export const trayMenu = (mainWindow, cb) => {
  const trayMenuTemplate = [
    {
      label: '退出',
      click: () => {
        // app.quit();
        mainWindow.close();
      }
    }
  ];
  // 系统托盘图标目录
  // eslint-disable-next-line no-undef
  const trayIcon = path.join(__static, 'icon.ico');
  appTray = new Tray(trayIcon);
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
  appTray.setToolTip('退出');
  appTray.setContextMenu(contextMenu);
  appTray.on('click', () => {
    mainWindow.show();
  });
};
export default trayMenu;
