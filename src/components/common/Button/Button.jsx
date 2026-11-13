import styles from "./Button.module.css";

/**
 * Buton generic.
 * variant: "primary" (galben) | "coral" | "outline" | "text"
 */
export default function Button({ children, variant = "primary", type = "button", ...rest }) {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
