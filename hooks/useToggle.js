import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  if (
    typeof initialValue !== 'boolean' &&
    typeof initialValue !== 'function' // Supports initicializer functions
  ) {
    throw new Error('Invalid type for useToggle');
  }

  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(
    () => setValue((currentValue) => !currentValue),
    []
  );

  return [value, toggle];
};

export default useToggle;