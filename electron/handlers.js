const { ipcMain } = require('electron');
const eventsEnum = require('../api/events-enum');
const getProjects = require('../api/get-projects');

module.exports = function initHandlers() {
  ipcMain.handle(eventsEnum.GET_PROJECTS, async (event, args) => {
    const projects = await getProjects(args);
    return projects;
  });

  ipcMain.handle(eventsEnum.ADD_PROJECT, async (event, args) => {
    throw new Error('not implemented');
  });

  ipcMain.handle(eventsEnum.UPDATE_PROJECT, async (event, args) => {
    throw new Error('not implemented');
  });
};
