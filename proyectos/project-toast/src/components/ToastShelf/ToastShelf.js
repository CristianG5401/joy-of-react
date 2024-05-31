import React, { useContext } from "react";
// Components
import Toast from "../Toast";
// Contexts
import { ToastContext } from "../../providers/ToastProvider";
// Styles
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, dismissToast } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ variant, message, timestamp }) => {
        return (
          <li key={timestamp} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              handleDismiss={() => dismissToast(timestamp)}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
