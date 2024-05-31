import { createContext, useState, useMemo, useEffect } from "react";

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setToasts([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
