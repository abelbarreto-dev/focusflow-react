import styles from "./Heading.module.css";

export const Heading = (props) => (
    <h1 className={styles.heading}>{props.children}</h1>
);
