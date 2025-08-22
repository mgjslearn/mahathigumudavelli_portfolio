import React, { createContext, useContext, useState, useCallback } from "react";

const StairTransitionContext = createContext({
  show: false,
  trigger: (cb) => {},
});

export const useStairTransition = () => useContext(StairTransitionContext);

export const StairTransitionProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [onComplete, setOnComplete] = useState(null);

  const trigger = useCallback((cb) => {
    setShow(true);
    setOnComplete(() => cb);
  }, []);

  const handleComplete = useCallback(() => {
    setShow(false);
    if (onComplete) onComplete();
    setOnComplete(null);
  }, [onComplete]);

  return (
    <StairTransitionContext.Provider value={{ show, trigger, handleComplete }}>
      {children}
    </StairTransitionContext.Provider>
  );
};
