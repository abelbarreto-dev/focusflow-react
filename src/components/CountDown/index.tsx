import styles from "./styles.module.css";

type CountDownProps = {
    children: React.ReactNode;
};

export const CountDown = ({ children }: CountDownProps) => (
    <h1 className={styles.count_down}>{children}</h1>
);
