import React, { useState } from "react";
// Components
import Button from "../Button";
// Styles
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

const ToastPlaygroundForm = ({ addToast }) => {
  const [message, setMessage] = useState("");
  const [selectedVariant, setVariant] = useState(DEFAULT_VARIANT);

  const submitHandler = (event) => {
    event.preventDefault();

    const newToast = {
      message,
      variant: selectedVariant,
      timestamp: Date.now(),
    };

    addToast(newToast);
    setMessage("");
    setVariant(DEFAULT_VARIANT);
  };

  return (
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
  );
};

export default ToastPlaygroundForm;
