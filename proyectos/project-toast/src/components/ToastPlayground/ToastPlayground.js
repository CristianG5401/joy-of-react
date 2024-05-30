import React, { useState } from "react";

// Components
import ToastPlaygroundForm from "./ToastPlaygroundForm";
import ToastShelf from "../ToastShelf/ToastShelf";
// Styles
import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <ToastPlaygroundForm />
    </div>
  );
}

export default ToastPlayground;
