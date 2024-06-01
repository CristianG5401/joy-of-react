import React, { useState, useContext } from "react";
// Components
import Button from "../Button";
// Contexts
import { ToastContext } from "../../providers/ToastProvider";
// Styles
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

const ToastPlaygroundForm = () => {
  const [message, setMessage] = useState("");
  const [selectedVariant, setVariant] = useState(DEFAULT_VARIANT);

  const { createToast } = useContext(ToastContext);

  const submitHandler = (event) => {
    event.preventDefault();
    
    createToast(message, selectedVariant);
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
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => {
              const radioVariantId = `variant-${variantOption}`;

              return (
                <label key={radioVariantId} htmlFor={radioVariantId}>
                  <input
                    id={radioVariantId}
                    required
                    type="radio"
                    name="variant"
                    value={variantOption}
                    checked={selectedVariant === variantOption}
                    onChange={(event) => setVariant(event.target.value)}
                  />
                  {variantOption}
                </label>
              );
            })}
          </div>
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
