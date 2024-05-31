import { useState, useCallback } from "react";

/**
 * This hook is used to create a toggle state.
 * @param {boolean} initialValue - The initial value of the toggle
 * @returns {[boolean, function]} - The toggle state and a function to toggle it
 */
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