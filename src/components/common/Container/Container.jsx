import styles from "./Container.module.css";

/** Limiteaza latimea continutului si adauga spatiere verticala pentru sectiuni. */
export default function Container({ children, as: Tag = "section", spacing = true, className = "", ...rest }) {
  return (
    <Tag className={`${styles.container} ${spacing ? styles.spacing : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
