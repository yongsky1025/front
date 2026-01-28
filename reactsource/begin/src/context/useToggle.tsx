import { useContext } from 'react';
import { ToggleContext } from './ToggleContext';

export function useToggle() {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('ToggleProvider null');
  }

  return context;
}
