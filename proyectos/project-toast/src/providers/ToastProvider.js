import { createContext, useState, useMemo } from "react";

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

    const createToast = (newToast) => {
      setToasts((currentToasts) => {
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

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
