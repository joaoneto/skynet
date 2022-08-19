const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const getTextList = require('../api/get-text-list');
const eventsEnum = require('../api/events-enum');

const ELECTRON_START_URL = process.env.ELECTRON_START_URL
  ? process.env.ELECTRON_START_URL
  : `file://${path.resolve(__dirname, '../dist/index.html')}`;

let mainWindow;

function createWindow() {
  console.log('Opening', ELECTRON_START_URL);
  mainWindow = new BrowserWindow({
    webPreferences: {
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 800,
    height: 600,
  });

  ipcMain.handle(eventsEnum.GET_TEXT_LIST, async () => {
    const textList = await getTextList();
    return textList;
  });

  mainWindow.loadURL(ELECTRON_START_URL);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
