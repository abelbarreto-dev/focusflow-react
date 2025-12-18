import styles from "./styles.module.css";

type HeadingProps = {
    children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => (
    <h1 className={styles.heading}>{children}</h1>
);
