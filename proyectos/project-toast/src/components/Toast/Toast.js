import React, { useContext } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

// Components
import VisuallyHidden from "../VisuallyHidden";
// Contexts
import { ToastContext } from "../../providers/ToastProvider";
// Styles
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ timestamp, variant, children }) {
  const { dismissToast } = useContext(ToastContext);

  const ToastIcon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>

      <p className={styles.content}>
        <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
        {children}
      </p>

      <button
        className={styles.closeButton}
        onClick={() => dismissToast(timestamp)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
