import React from 'react';
import Terminal from '@/ui/components/terminal';
import { useStore } from '@/ui/store';

function ConsoleSection() {
  const { state } = useStore();

  console.log('ConsoleSection', state);

  return (
    <Terminal />
  );
}

export default ConsoleSection;
