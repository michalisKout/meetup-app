import { useState } from 'react';

export const useModalDisplay = () => {
  const [displayModal, setDisplayModal] = useState(false);

  function toggleModalDisplay() {
    setDisplayModal(!displayModal);
  }

  return [displayModal, toggleModalDisplay];
};
