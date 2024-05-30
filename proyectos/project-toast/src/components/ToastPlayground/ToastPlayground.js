import React, { useState } from "react";

// Components
import ToastPlaygroundForm from "./ToastPlaygroundForm";
import ToastShelf from "../ToastShelf/ToastShelf";
// Styles
import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const [toasts, setToasts] = useState([]);

  const handleDismiss = (timestamp) => {
    const nextToasts = toasts.filter((toast) => toast.timestamp !== timestamp);

    setToasts(nextToasts);
  };

  const addToast = (newToast) => {
    const nextToasts = [...toasts, newToast];

    setToasts(nextToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
      <ToastPlaygroundForm addToast={addToast} />
    </div>
  );
}

export default ToastPlayground;
