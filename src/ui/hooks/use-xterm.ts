import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

const fitAddon = new FitAddon();
const terminals = {};

function resize() {
  fitAddon.fit();
}

window.addEventListener('resize', resize);

function createTerminal(id) {
  const xterm = new Terminal();
  xterm.loadAddon(fitAddon);
  terminals[id] = xterm;

  return xterm;
}

function getTerminal(id) {
  if (!terminals[id]) {
    return createTerminal(id);
  }

  return terminals[id];
}

function useXterm(id = 'core') {
  resize();
  return getTerminal(id);
}

export default useXterm;
