import { spawn } from 'child_process';
import React, { useState } from 'react';

import { useStore } from '@/store';

import useXterm from '@/hooks/use-xterm';

import ProjectList from '@/components/project-list';
import ProjectCard from '@/components/project-card';

function MainSection() {
  const xterm = useXterm();
  const [pids, setPids] = useState({});
  const { state } = useStore();
  console.log('MainSection', state)
  if (!state.projects) {
    // loading
    return null;
  }

  function onExecute(projectId) {
    const projectConfig = state.projects.find((project) => project.id === projectId);
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
      {state.projects.map((project) => {
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
