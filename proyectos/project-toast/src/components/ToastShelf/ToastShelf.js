import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message, timestamp }) => {
        return (
          <li key={timestamp} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              handleDismiss={() => handleDismiss(timestamp)}
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
