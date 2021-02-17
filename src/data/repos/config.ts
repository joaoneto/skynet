import { promises as fs } from 'fs';

import { SKYNET_CONFIG_PATH } from '@/constants';
import {
  FileAccessDeniedError,
  FileNotFoundError,
  UnexpectedError,
} from '@/errors';

export interface ConfigRepo {
  load(): Promise<void>;
  get(prop?: string);
  save(config, prop?: string): Promise<void>;
}

export interface ConfigRepoFactory {
  (): ConfigRepo;
}

let loadedConfig = {};

export const ConfigRepoFactory: ConfigRepoFactory = (): ConfigRepo => {
  return {
    async load() {
      try {
        const readedConfigFile = await fs.readFile(SKYNET_CONFIG_PATH, 'utf-8');
        loadedConfig = JSON.parse(readedConfigFile);
      } catch (err) {
        switch (err.code) {
          case 'ENOENT':
            throw new FileNotFoundError(`File not found: ${SKYNET_CONFIG_PATH}`);
          case 'EACCES':
            throw new FileAccessDeniedError(`File access denied: ${SKYNET_CONFIG_PATH}`);
          default:
            throw new UnexpectedError();
        }
      }
    },

    async save(config) {
      try {
        loadedConfig = { ...loadedConfig, ...config };
        await fs.writeFile(SKYNET_CONFIG_PATH, JSON.stringify(loadedConfig), 'utf-8');
      } catch (err) {
        switch (err.code) {
          case 'ENOENT':
            throw new FileNotFoundError(`File not found: ${SKYNET_CONFIG_PATH}`);
          case 'EACCES':
            throw new FileAccessDeniedError(`File access denied: ${SKYNET_CONFIG_PATH}`);
          default:
            throw new UnexpectedError();
        }
      }
    },

    get(prop) {
      return prop ? loadedConfig[prop] : loadedConfig;
    },
  };
};
