import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useXterm from '@/ui/hooks/use-xterm';

const TerminalStyled = styled.div`
  flex: 1 1 auto;
  height: 220px;
  min-width: 320px;
  background-color: black;
  @media (min-width: 720px) {
    height: auto;
  }
`;

export default function Console() {
  const terminalRef = useRef();
  const xterm = useXterm();

  useEffect(() => {
    xterm.open(terminalRef.current);
  }, [xterm, terminalRef]);

  return (
    <TerminalStyled ref={terminalRef} />
  );
}
