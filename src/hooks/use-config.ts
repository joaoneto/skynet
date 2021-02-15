import fs from 'fs';
import path from 'path';
import { useState, useEffect } from 'react';

function useConfig() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const loadedConfig = fs.readFileSync(path.resolve(process.cwd(), './config.json'), 'utf-8');
    setConfig(JSON.parse(loadedConfig));
  }, []);

  return [config, setConfig];
}

export default useConfig;
