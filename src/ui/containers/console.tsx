import React from 'react';
import Terminal from '@/ui/components/terminal';
import { useStore } from '@/ui/store';

function ConsoleContainer() {
  const { state } = useStore();

  console.log('ConsoleContainer', state);

  return (
    <Terminal />
  );
}

export default ConsoleContainer;
