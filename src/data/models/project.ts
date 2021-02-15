type CMDModel = {
  program: string;
  params: string[];
};

type HostModel = {
  protocol: string;
  port: string;
  hostname: string;
};

export type ProjectModel = {
  id: string;
  name: string;
  cmd: CMDModel;
  env: Record<string, string>;
  cwd: string;
  target: HostModel;
  paths: string[];
};
