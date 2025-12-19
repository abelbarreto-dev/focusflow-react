import styles from "./styles.module.css";

type ButtonProps = {
    id: string;
    icon: React.ReactNode;
    color?: "green" | "red";
    disabled?: boolean;
};

export const Button = ({ id, icon, color = "green", disabled }: ButtonProps) => {
    return (
        <>
            <button id={id} className={`${styles.button} ${styles[color]}`} disabled={disabled}>{icon}</button>
        </>
    );
};
