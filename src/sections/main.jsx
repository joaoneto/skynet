import { spawn } from 'child_process';
import React, { useState } from 'react';

import useConfig from '../hooks/use-config';
import useXterm from '../hooks/use-xterm';

import ProjectList from '../components/project-list';
import ProjectCard from '../components/project-card';

function MainSection() {
  const [config] = useConfig();
  const xterm = useXterm();
  const [pids, setPids] = useState({});

  if (!config) {
    // loading
    return null;
  }

  function onExecute(projectId) {
    const projectConfig = config.projects.find((project) => project.id === projectId);
    const { program, params } = projectConfig.cmd;
    const env = { ...process.env, ...projectConfig.env };
    const { cwd } = projectConfig;
    const projectProcess = spawn(program, params, { env, cwd, detached: true });

    console.log(projectProcess)

    // projectProcess.on('exit', (code) => {
    //   console.log(code);
    // });

    // projectProcess.on('close', (code) => {
    //   setPids({ ...pids, ...{ [projectId]: null } });
    // });

    projectProcess.stdout.on('data', (data) => {
      xterm.write(data.toString().replace(/\n/g, '\r\n'));
    });

    projectProcess.stderr.on('data', (data) => {
      xterm.write(data.toString().replace(/\n/g, '\r\n'));
    });

    setPids({ ...pids, ...{ [projectId]: projectProcess.pid } });
    xterm.writeln(`SPAWN '${projectId}' ${projectProcess.pid}`);
  }

  function onExit(projectId) {
    if (pids[projectId]) {
      process.kill(-pids[projectId]);
      xterm.writeln(`KILL '${projectId}' ${pids[projectId]}`);
    }
  }

  return (
    <ProjectList>
      {config.projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            onExecute={onExecute}
            onExit={onExit}
          />
        );
      })}
    </ProjectList>
  );
}

export default MainSection;
