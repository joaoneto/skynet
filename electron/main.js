const path = require('path');
const { app, BrowserWindow } = require('electron');
const initHandlers = require('./handlers');

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
    width: 640,
    height: 600,
  });
  mainWindow.loadURL(ELECTRON_START_URL);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  initHandlers();
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
