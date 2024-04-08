import { useState, useCallback } from 'react';

export const useAnimClose = (setClose: (a: null) => void, duration = 600) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => setClose(null), duration);
  }, [setClose, duration]);

  return { isClosing, handleClose };
};
