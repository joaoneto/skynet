const fs = require('fs').promises;
const { contextBridge, ipcRenderer } = require('electron');

const { SKYNET_CONFIG_PATH } = require('../constants');

let loadedConfig = {};

async function load() {
  const rawConfig = await fs.readFile(SKYNET_CONFIG_PATH, 'utf-8');
  loadedConfig = JSON.parse(rawConfig);
  return loadedConfig;
}

load();

contextBridge.exposeInMainWorld('__config_api__', {
  save: async function save(config, collection) {
    if (collection) {
      if (Array.isArray(config)) {
        loadedConfig[collection] = [...loadedConfig[collection], ...config];
      } else if (typeof config === 'object') {
        loadedConfig[collection] = { ...loadedConfig[collection], ...config };
      } else {
        loadedConfig[collection] = config;
      }
    }
    await fs.writeFile(SKYNET_CONFIG_PATH, JSON.stringify(loadedConfig), 'utf-8');
  },
  getAll: function getAll(collection) {
    return loadedConfig[collection];
  },
  findById: function findById(id, collection) {
    return Array.isArray(loadedConfig[collection])
      && loadedConfig[collection].find((item) => id === item.id);
  },
});
