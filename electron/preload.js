const { contextBridge, ipcRenderer } = require('electron');
const eventsEnum = require('../api/events-enum');

contextBridge.exposeInMainWorld('api', {
  getProjects: () => ipcRenderer.invoke(eventsEnum.GET_PROJECTS),
  addProject: (payload) => ipcRenderer.invoke(eventsEnum.ADD_PROJECT, payload),
  updateProject: (id, payload) => ipcRenderer.invoke(eventsEnum.UPDATE_PROJECT, id, payload),
});
