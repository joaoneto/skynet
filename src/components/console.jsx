import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useXterm from '../hooks/use-xterm';

const ConsoleStyled = styled.div`
  flex: 1 1 auto;
  height: 220px;
  min-width: 320px;
  background-color: black;
  @media (min-width: 720px) {
    height: auto;
  }
`;

export default function Console() {
  const consoleRef = useRef();
  const xterm = useXterm();

  useEffect(() => {
    xterm.open(consoleRef.current);
  }, [xterm, consoleRef]);

  return (
    <ConsoleStyled ref={consoleRef} />
  );
}
