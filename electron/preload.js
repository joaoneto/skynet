const { contextBridge, ipcRenderer } = require('electron');
const eventsEnum = require('../api/events-enum');

contextBridge.exposeInMainWorld('api', {
  getTextList: () => ipcRenderer.invoke(eventsEnum.GET_TEXT_LIST),
});
