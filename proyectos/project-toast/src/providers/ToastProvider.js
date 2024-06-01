import { createContext, useState, useMemo, useCallback } from "react";

// Hooks
import useListenForKeydown from "../hooks/useListenForKeydown";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const providerValue = useMemo(() => {
    const dismissToast = (timestamp) => {
      setToasts((currentToasts) => {
        const nextToasts = currentToasts.filter(
          (element) => element.timestamp !== timestamp
        );

        return nextToasts;
      });
    };

    const createToast = (message, variant) => {
      setToasts((currentToasts) => {
        const newToast = {
          message,
          variant,
          timestamp: Date.now(),
        };
        const nextToasts = [...currentToasts, newToast];

        return nextToasts;
      });
    };

    return {
      toasts,
      createToast,
      dismissToast,
    };
  }, [toasts]);

  const dismissAllToasts = useCallback(() => {
    setToasts([]);
  }, []);
  useListenForKeydown("Escape", dismissAllToasts);

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
