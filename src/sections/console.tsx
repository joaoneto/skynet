import React from 'react';
import Terminal from '@/components/terminal';
import { useStore } from '@/store';

function ConsoleSection() {
  const { state } = useStore();

  console.log('ConsoleSection', state);

  return (
    <Terminal />
  );
}

export default ConsoleSection;
