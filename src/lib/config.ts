import fs from 'fs';

import { SKYNET_CONFIG_PATH } from '@/constants';

let loadedConfig;

export function load() {
  loadedConfig = fs.readFileSync(SKYNET_CONFIG_PATH, 'utf-8');
}

export function get() {
  JSON.parse(loadedConfig);
}

export function save(newConfig) {
  loadedConfig = { ...newConfig };
  fs.writeFileSync(SKYNET_CONFIG_PATH, JSON.stringify(loadedConfig), 'utf-8');
}
