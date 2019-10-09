import { createContext, useState } from 'react';

export const SearchContext = createContext(null);

export const FreeEventsContext = createContext(null);

export const useModalDisplay = () => {
  const [display, setDisplay] = useState(false);

  function toggleModalDisplay() {
    setDisplay(!display);
  }

  return {
    display,
    toggleModalDisplay,
  };
};
