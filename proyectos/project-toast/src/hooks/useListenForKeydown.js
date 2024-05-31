import { useEffect } from "react";

/**
 * This hook is used to listen for a keydown event.
 * @param {string} keyToListenFor - The key to listen for
 * @param {function} keyDownHandler - The action to perform when the key is pressed
 */
const useListenForKeydown = (keyToListenFor, keyDownHandler) => {
  useEffect(() => {
    const eventListener = (event) => {
      if (event.key === keyToListenFor) {
        keyDownHandler(event);
      }
    };

    window.addEventListener("keydown", eventListener);

    return () => {
      window.removeEventListener("keydown", eventListener);
    };
  }, [keyToListenFor, keyDownHandler]);
};

export default useListenForKeydown;
