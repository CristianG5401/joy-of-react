import React, { useState } from "react";

// Components
import Button from "../Button";
import Toast from "../Toast";
// Styles
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [selectedVariant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [isToastVisible, setToastVisibility] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setToastVisibility(true);
  };

  console.log("*🪼 ToastPlaygroundData:", { message, selectedVariant });
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast variant={selectedVariant} handleDismiss={() => setToastVisibility(false)}>{message}</Toast>
      )}

      <div className={styles.controlsWrapper}>
        <form onSubmit={submitHandler}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                required
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>

            {VARIANT_OPTIONS.map((variantOption) => {
              const radioVariantId = `variant-${variantOption}`;

              return (
                <div
                  key={radioVariantId}
                  className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                  <label htmlFor={radioVariantId}>
                    <input
                      id={radioVariantId}
                      required
                      type="radio"
                      name="variant"
                      value={variantOption}
                      checked={selectedVariant === variantOption}
                      onChange={() => setVariant(variantOption)}
                    />
                    {variantOption}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
