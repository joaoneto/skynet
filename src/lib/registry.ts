const registry = {};

/**
 * Injectable register
 * @template T
 * @param {string} name injectable name
 * @param {T} data injectable data
 */
export const register = <T>(name: string, data: T): void => {
  registry[name] = data;
};

/**
 * Get registered injectable
 * @template T
 * @param {string} name injectable name
 * @return {T}
 */
export const get = <T>(name: string): T => registry[name];
